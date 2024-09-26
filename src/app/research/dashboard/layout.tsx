import type { Metadata } from "next";
import { Inter, Arbutus, Atkinson_Hyperlegible } from "next/font/google";

import "~/styles/globals.css";
import "~/styles/deresearcher.css";
import { UIProvider } from "~/_components/final/Providers/UIProvider";
import Sidebar from "~/_components/final/Dashboard/Sidebar";
import Navbar, { NavLink } from "~/_components/final/Navbar";
import { learnNavLinks } from "~/app/research/page";

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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>
          <div className="flex h-screen bg-zinc-100">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-y-auto">
              <Navbar links={learnNavLinks} />
              <div className="flex-1 overflow-x-hidden bg-zinc-100">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </div>
            </div>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
