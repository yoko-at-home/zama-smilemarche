import "./globals.css";

import { NavBarMobile } from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { GTM_ID, MetaHeader } from "@/components/Layout/Header/MetaHeader";
import { siteMetadata } from "@/data/siteMetadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <MetaHeader
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <body className="font-mono antialiased">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <NavBarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
