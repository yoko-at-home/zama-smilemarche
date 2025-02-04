import "./globals.css";
import { NavBarMobile } from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import type { Metadata } from "next";
import Script from "next/script";
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

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
              title="Google Tag Manager"
            />
          </noscript>
        )}

        {/* Google Tag Manager (Script) */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
        )}

        <NavBarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
