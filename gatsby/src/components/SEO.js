import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ children, location, description, title, image }) {
    const data = useStaticQuery(graphql`
        query SeoFromSanity {
            sanityPageMetadata {
                titleT {
                    en
                    pl
                }
                descriptionT {
                    en
                    pl
                }
                keywordsT {
                    en
                    pl
                }
            }
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                }
            }
        }
    `);

    const locale = typeof location === "string" ? location : "pl";
    const pathname =
      location && typeof location === "object" && location.pathname
        ? location.pathname
        : "/";

    const metaTitle =
      locale === "pl"
        ? data.sanityPageMetadata.titleT.pl
        : data.sanityPageMetadata.titleT.en;

    const metaDescription =
      locale === "pl"
        ? data.sanityPageMetadata.descriptionT.pl
        : data.sanityPageMetadata.descriptionT.en;

    const metaKeywords =
      locale === "pl"
        ? data.sanityPageMetadata.keywordsT.pl
        : data.sanityPageMetadata.keywordsT.en;

    const siteUrl = data.site.siteMetadata.siteUrl;
    const canonicalUrl = new URL(pathname || "/", siteUrl).href;

    return (
      <Helmet titleTemplate="%s">
          <html lang={locale} />
          <title>{title || metaTitle}</title>

          {/* Canonical */}
          <link rel="canonical" href={canonicalUrl} />

          {/* Fav Icons */}
          <link rel="icon" type="image/png" href="/favicon.png" />

          {/* Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <meta name="description" content={description || metaDescription} />
          <meta name="keywords" content={metaKeywords} />

          {/* Open Graph */}
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={image || "/logo.svg"} />
          <meta property="og:title" content={title || metaTitle} key="ogtitle" />
          <meta property="og:site_name" content={metaTitle} key="ogsitename" />
          <meta property="og:description" content={description || metaDescription} key="ogdesc" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="robots" content="INDEX,FOLLOW" />
          <meta name="google-site-verification" content="56CGrjx_pVO9r0534FsJuu-WcnJOWksesTn5Ugcu_I0" />
          {children}
      </Helmet>
    );
}
