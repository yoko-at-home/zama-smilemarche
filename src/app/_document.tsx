import { siteMetadata } from "@/data/siteMetadata";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={siteMetadata.description} />
          <meta property="og:site_name" content={siteMetadata.siteUrl} />
          <meta property="og:description" content={siteMetadata.description} />
          <meta property="og:title" content={siteMetadata.author} />
          <meta name="twitter:card" content={siteMetadata.ogImage} />
          <meta name="twitter:title" content={siteMetadata.author} />
          <meta name="twitter:description" content={siteMetadata.description} />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
