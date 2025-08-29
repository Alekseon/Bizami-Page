import React from 'react';
import Layout from './src/components/Layout';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FormProvider } from './src/components/FormContext';

export function onRenderBody({ setHeadComponents }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bizami",
    "url": "https://www.bizami.pl",
    "logo": "https://www.bizami.pl/logo.svg",
    "image": "https://www.bizami.pl/logo.svg",
    "description": "Platforma BIZAMI – narzędzie do zarządzania zapasami i zakupami. Precyzyjne prognozy, optymalizacja kosztów, pełna kontrola nad magazynami.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Kostki Napierskiego 7",
      "addressLocality": "Gdynia",
      "postalCode": "81-469",
      "addressCountry": "PL"
    },
    "telephone": "+48 603 603 285",
    "email": "kontakt@bizami.pl",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Kostki Napierskiego 7",
        "addressLocality": "Gdynia",
        "postalCode": "81-469",
        "addressCountry": "PL"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    },

    "sameAs": ["https://www.linkedin.com/company/bizami-pl"]
  };

  setHeadComponents([
    <script
      key="org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
    />
  ]);
}

export function wrapPageElement({ element, props }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_CAPTCHA_KEY || ''}>
      <Layout {...props}>{element}</Layout>
    </GoogleReCaptchaProvider>
  );
}

export function wrapRootElement({ element }) {
  return <FormProvider>{element}</FormProvider>;
}
