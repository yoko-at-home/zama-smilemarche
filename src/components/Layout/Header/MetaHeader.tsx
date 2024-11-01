"use client";
import Head from "next/head";
import type { Metadata } from "next";

import { siteMetadata } from "@/data/siteMetadata";
import { useEffect } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: siteMetadata.author,
  description: siteMetadata.description,
  openGraph: siteMetadata.openGraph,
  keywords: siteMetadata.keywords,
};

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function MetaHeader() {
  useEffect(() => {
    // TypeScriptの型エラーを防ぐ
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
  }, []);

  return (
    <Head>
      {/* SEO metadata */}
      <metadata />
      <title>{siteMetadata.title}</title>
      <meta name="keywords" content={siteMetadata.keywords} />
      {/* <meta name="description" content={siteMetadata.description} /> */}
      {/* <meta name="author" content={siteMetadata.author} /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content={process.env.GOOGLESITE_VERIFICATION_CODE}
      />

      {/* Open Graph (Facebook) */}
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.siteLogo} />
      <meta property="og:url" content={siteMetadata.youtube} />
      <meta property="og:type" content={siteMetadata.siteUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yokoiwasaki6" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.siteLogo} />

      {/* Google Tag Manager - Script */}
      {GTM_ID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}
    </Head>
  );
}
