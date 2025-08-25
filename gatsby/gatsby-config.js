import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default {
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
        watchMode: true,
        token: process.env.SANITY_TOKEN,
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
