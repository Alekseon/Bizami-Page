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
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host:  'https://bizami.pl/',
        sitemap: 'https://bizami.pl/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q46bplag",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
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
