// src/utils/useDemoInfo.js
import { useState, useCallback, useMemo } from "react";

async function parseJsonSafe(res) {
    const ct = res.headers.get("content-type") || "";
    const text = await res.text(); // czytamy raz
    if (ct.includes("application/json")) {
        try {
            return JSON.parse(text || "{}");
        } catch {
            return {};
        }
    }
    return { ok: res.ok, message: text || (res.ok ? "OK" : "Error") };
}

export default function useDemoInfo({ values = {} }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    // Baza API:
    // - PROD: "/api" (Pages Functions)
    // - DEV (gatsby develop: :8000): 127.0.0.1:8788 jeśli nie ustawiono GATSBY_API_BASE
    const base = useMemo(() => {
        const envBase = (process.env.GATSBY_API_BASE || "/api").replace(/\/+$/, "");
        if (typeof window !== "undefined") {
            const { hostname, port } = window.location;
            const isGatsbyDev = hostname === "localhost" && port === "8000";
            if (isGatsbyDev && !process.env.GATSBY_API_BASE) {
                return "http://127.0.0.1:8788/api"; // wrangler pages dev
            }
        }
        return envBase;
    }, []);

    const submitDemoRequest = useCallback(
      async (event, recaptchaToken) => {
          try {
              setLoading(true);
              setError(false);
              setMessage("");

              const res = await fetch(`${base}/send-email`, {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                      ...values,
                      recaptchaToken,
                      action: "contact_form",
                  }),
              });

              const payload = await parseJsonSafe(res);

              console.log("send-email STATUS:", res.status);
              console.log("send-email RESPONSE:", payload);


              if (!res.ok || payload?.ok === false) {
                  const err = new Error(
                    payload?.message || "Wysyłka formularza nie powiodła się"
                  );
                  err.details = payload;
                  throw err;
              }

              setMessage(
                payload?.message || "Dziękujemy! Twoje zgłoszenie zostało przesłane."
              );
              setError(false);
          } catch (e) {
              setError(true);
              setMessage(e?.message || "Wystąpił błąd. Spróbuj ponownie.");
              throw e;
          } finally {
              setLoading(false);
          }
      },
      [base, values]
    );

    return { submitDemoRequest, loading, message, error };
}
