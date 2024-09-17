import type { Metadata } from "next";
import "./globals.css";
import { notoSansKr } from "@/assets/font/font";

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "포켓몬 도감 리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
