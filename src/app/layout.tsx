import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { commonMetadata } from "./metadata";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...commonMetadata,
  title: 'MapleM Info',
  icons: {
    icon: '/maplepet.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
