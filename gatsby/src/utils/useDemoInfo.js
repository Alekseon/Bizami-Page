// src/utils/useDemoInfo.js
import { useState, useCallback } from "react";

export default function useDemoInfo({ values = {} }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const base = "/api"; // Cloudflare Pages Functions (mapowane z /functions/api/*)

    const submitDemoRequest = useCallback(
      async (event, recaptchaToken) => {
          try {
              setLoading(true);
              setError(false);
              setMessage("");

              const res = await fetch(`${base}/send-email`, {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ ...values, recaptchaToken, action: "contact_form" }),
              });

              let payload = {};
              try { payload = await res.json(); } catch {}

              if (!res.ok || payload?.ok === false) {
                  const err = new Error(payload?.message || "Wysyłka formularza nie powiodła się");
                  err.details = payload;
                  throw err;
              }

              setMessage(payload?.message || "Dziękujemy! Twoje zgłoszenie zostało przesłane.");
              setError(false);
          } catch (e) {
              setError(true);
              setMessage(e?.message || "Wystąpił błąd. Spróbuj ponownie.");
              throw e;
          } finally {
              setLoading(false);
          }
      },
      [values]
    );

    return { submitDemoRequest, loading, message, error };
}
