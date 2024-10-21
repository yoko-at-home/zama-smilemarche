import Head from "next/head";
import type { Metadata } from "next";

import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.author,
  description: siteMetadata.description,
  openGraph: siteMetadata.openGraph,
  keywords: siteMetadata.keywords,
};

export default function MetaHeader() {
  return (
    <Head>
      {/* SEO metadata */}
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content={process.env.GOOGLESITE_VERIFICATION_CODE}
      />

      {/* Open Graph (Facebook) */}
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.siteLogo} />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content={siteMetadata.siteUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourtwitterhandle" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.siteLogo} />
    </Head>
  );
}
