import "./globals.css";

import { NavBarMobile } from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { GTM_ID } from "@/components/Layout/Header/MetaHeader";
import { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";

export const revalidate = 60;
// ISRの再生成時間を設定

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteMetadata.title}`,
    description: siteMetadata.description,
    openGraph: {
      title: `${siteMetadata.title}`,
      description: siteMetadata.description,
      images: siteMetadata.ogImage,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
