// functions/api/send-email.js
// Cloudflare Pages Functions

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*", // PROD: zawęź do swojej domeny
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type, authorization",
    },
  });
}

export async function onRequestPost({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*", // PROD: zawęź do swojej domeny
      },
    });

  let stage = "start";
  try {
    stage = "parse-body";
    const body = await request.json().catch(() => ({}));

    const {
      company, email, phone, erp, quantity,
      message: userMessage,
      recaptchaToken,
      to, subject,
      action = "contact_form",
    } = body || {};

    stage = "validate-input";
    const missing = ["company", "email", "recaptchaToken"].filter((k) => !body?.[k]);
    if (missing.length) {
      return json({ ok: false, message: `Brak pól: ${missing.join(", ")}` }, 400);
    }

    stage = "check-env";
    const recSecret = env.SECRET_KEY;
    const smtpSecret = env.SMTPXP_SECRET;
    const smtpSender = "test@test.pl";
    const smtpTo = to || "a.sobanska@alekseon.com";

    if (!recSecret)  return json({ ok:false, message:"Brak RECAPTCHA_SECRET w env" }, 500);
    if (!smtpSecret) return json({ ok:false, message:"Brak SMTPXP_SECRET w env" }, 500);
    if (!smtpSender) return json({ ok:false, message:"Brak SMTPXP_SENDER w env" }, 500);
    if (!smtpTo)     return json({ ok:false, message:"Brak odbiorcy (SMTPXP_TO lub 'to' w body)" }, 400);

    stage = "verify-recaptcha";
    const form = new URLSearchParams();
    form.set("secret", recSecret);
    form.set("response", recaptchaToken);
    const g = await fetch("https://www.google.com/recaptcha/api/siteverify", { method: "POST", body: form });
    const ver = await g.json();

    const minScore = Number("0.4");
    const expectedAction = "homepage" || action;
    const scoreOk = typeof ver.score === "number" ? ver.score >= minScore : true;
    const actionOk = expectedAction ? ver.action === expectedAction : true;

    if (!ver.success || !scoreOk || !actionOk) {
      return json({
        ok:false, message:"reCAPTCHA failed",
        details:{ success:ver.success, score:ver.score, action:ver.action, hostname:ver.hostname,
          errorCodes:ver["error-codes"], minScore, expectedAction }
      }, 400);
    }

    stage = "build-email";
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
      </div>`;

    stage = "smtpexpress-fetch";
    let r, txt;
    try {
      r = await fetch("https://api.smtpexpress.com/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${smtpSecret}`,
        },
        body: JSON.stringify({
          subject: emailSubject,
          message: html,
          sender: { name: "Formularz", email: smtpSender },
          recipients: smtpTo, // string albo tablica
        }),
      });
      txt = await r.text();
    } catch (netErr) {
      return json({ ok:false, message:"Błąd połączenia z SMTPExpress", error:String(netErr) }, 502);
    }

    if (!r.ok) {
      return json({ ok:false, message:"SMTPExpress odrzucił żądanie", details:txt }, 502);
    }

    stage = "done";
    return json({ ok:true, message:"Dziękujemy! Zgłoszenie zostało wysłane." }, 200);

  } catch (e) {
    // pokaż dokladnie gdzie i co pękło
    return json({
      ok:false, message:"Błąd serwera",
      error: (e && e.stack) ? e.stack : String(e),
      stage
    }, 500);
  }
}

function escapeHtml(s = "") {
  return String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));
}
