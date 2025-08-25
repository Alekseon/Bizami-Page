import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ children, location, description, title, image }) {
  const metaTitle = "titleT";
  const metaDescription = "descriptionT.";
  const metaKeywords ="keywords"
  return (
    <Helmet titleTemplate={`%s`}>
      <html lang="pl" />
      <title>{metaTitle}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={metaTitle}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <meta name="robots" content="INDEX,FOLLOW"></meta>
      <meta
        name="google-site-verification"
        content="56CGrjx_pVO9r0534FsJuu-WcnJOWksesTn5Ugcu_I0"
      />
      {children}
    </Helmet>
  );
}
