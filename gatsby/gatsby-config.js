// gatsby-config.js (CommonJS dla Gatsby 2)
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    title: `Welcome to Bizami – Business Intelligence in Logistic`,
    siteUrl: "https://www.bizami.pl",
    description:
      "Odkryj nowe możliwości biznesowe z naszą platformą internetową. Oprogramowanie BIZAMI skupia się na precyzyjnym prognozowaniu popytu, optymalizacji procesów zakupowych, a także elastyczności w zarządzaniu zapasami. Sprawdź teraz!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q46bplag",
        dataset: "production",
        // token trzymaj w env; nazwa dowolna – ważne by była ustawiona w Netlify/locally
        token: process.env.SANITY_TOKEN,
        useCdn: false,
        // WYMAGANE: jawna wersja API Sanity
        apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
        // Nie używaj watchMode w produkcji (blokuje buildy)
        watchMode: isDev,
        // opcjonalnie: overlayDrafts tylko w dev/preview
        // overlayDrafts: isDev,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KS8TGWGS",
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
