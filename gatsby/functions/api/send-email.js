// functions/api/send-email.js
// Cloudflare Pages Functions (Workers runtime)

export async function onRequestPost({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" },
    });

  try {
    const body = await request.json().catch(() => ({}));
    const {
      company,
      name,
      email,
      phone,
      erp,
      quantity,
      message: userMessage,
      recaptchaToken,          // <-- token z frontu
      to,                      // (opcjonalnie) odbiorca z frontu
      subject,                 // (opcjonalnie) własny temat
      action = "contact_form", // (opcjonalnie) nazwa akcji v3
    } = body || {};

    // --- walidacja wejścia ---
    const required = ["company", "name", "email", "recaptchaToken"];
    const missing = required.filter((k) => !body?.[k]);
    if (missing.length) {
      return json({ ok: false, message: `Brak pól: ${missing.join(", ")}` }, 400);
    }

    // --- reCAPTCHA VERIFY ---
    const secret = env.RECAPTCHA_SECRET;
    if (!secret) {
      return json({ ok: false, message: "Brak RECAPTCHA_SECRET w env" }, 500);
    }

    const form = new URLSearchParams();
    form.set("secret", secret);
    form.set("response", recaptchaToken);

    const g = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: form,
    });
    const ver = await g.json();

    const minScore = Number(env.RECAPTCHA_MIN_SCORE ?? "0.5");
    const expectedAction = 'homepage' || action;

    const scoreOk = typeof ver.score === "number" ? ver.score >= minScore : true;
    const actionOk = expectedAction ? ver.action === expectedAction : true;

    if (!ver.success || !scoreOk || !actionOk) {
      return json(
        {
          ok: false,
          message: "reCAPTCHA failed",
          details: {
            success: ver.success,
            score: ver.score,
            action: ver.action,
            hostname: ver.hostname,
            errorCodes: ver["error-codes"],
            minScore,
            expectedAction,
          },
        },
        400
      );
    }

    // --- SMTPExpress SEND API ---
    const smtpSecret = env.SMTPXP_SECRET;
    const senderEmail = env.SMTPXP_SENDER; // adres nadawcy z SMTPExpress
    const defaultTo = env.SMTPXP_TO;       // domyślny odbiorca (np. Twoja skrzynka)

    if (!smtpSecret || !senderEmail) {
      return json({ ok: false, message: "Brak SMTPXP_SECRET/SMTPXP_SENDER w env" }, 500);
    }

    const recipients = to || defaultTo;
    if (!recipients) {
      return json({ ok: false, message: "Brak odbiorcy (SMTPXP_TO lub 'to' w body)" }, 400);
    }

    const emailSubject = subject || `Zapytanie – ${company || name}`;
    const html = `
      <div>
        <h2>Nowe zgłoszenie z formularza</h2>
        <p><b>Firma:</b> ${escapeHtml(company)}</p>
        <p><b>Imię i nazwisko:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Telefon:</b> ${escapeHtml(phone || "")}</p>
        <p><b>ERP:</b> ${escapeHtml(erp || "")}</p>
        <p><b>Liczba produktów:</b> ${escapeHtml(quantity || "")}</p>
        ${userMessage ? `<p><b>Wiadomość:</b><br>${escapeHtml(userMessage)}</p>` : ""}
      </div>
    `;

    const r = await fetch("https://api.smtpexpress.com/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${smtpSecret}`,
      },
      body: JSON.stringify({
        subject: emailSubject,
        message: html,
        sender: { name: "Formularz", email: senderEmail },
        recipients, // string lub tablica e-maili
      }),
    });

    const txt = await r.text();
    if (!r.ok) {
      return json({ ok: false, message: "SMTPExpress odrzucił żądanie", details: txt }, 502);
    }

    return json({ ok: true, message: "Dziękujemy! Zgłoszenie zostało wysłane." }, 200);
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, message: "Błąd serwera", error: String(e) }),
      { status: 500, headers: { "content-type": "application/json; charset=utf-8" } }
    );
  }
}

// prosta funkcja unikająca wstrzyknięć w HTML maila
function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
