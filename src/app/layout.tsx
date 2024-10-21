import "./globals.css";

import { NavBarMobile } from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import MetaHeader from "@/components/Layout/Header/MetaHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <MetaHeader />

      <body className="font-mono antialiased">
        <NavBarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
