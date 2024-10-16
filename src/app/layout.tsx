import type { Metadata } from "next";
import "./globals.css";

import { NavBarMobile } from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.author,
  description: siteMetadata.description,
  openGraph: siteMetadata.openGraph,
  keywords: siteMetadata.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-mono antialiased">
        <NavBarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
