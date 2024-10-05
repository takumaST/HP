import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";

import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

// export const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "合同会社エクセンド",
  description: "合同会社エクセンドのホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-M3TJGWPN"/>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
