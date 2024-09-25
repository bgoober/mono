import type { Metadata } from "next";
import { Inter, Arbutus, Atkinson_Hyperlegible } from "next/font/google";
import "~/styles/globals.css";
import "~/styles/deresearcher.css";
import { UIProvider } from "~/_components/Deresearcher/Providers/UIProvider";

const inter = Inter({ subsets: ["latin"] });
const arbutus = Arbutus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arbutus",
});
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-atkinson",
});

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
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
