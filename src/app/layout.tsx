import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={`${inter.className} bg-slate-100 text-slate-100 container mx-auto p-4`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
