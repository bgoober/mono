import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";

import { UIProvider } from "~/_components/providers/UIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "deResearcher",
    template: "%s | deResearcher",
  },
  description: "A decentralized research platform on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
