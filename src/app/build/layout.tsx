import type { Metadata } from "next";
import { Inter, Arbutus, Atkinson_Hyperlegible } from "next/font/google";
import "~/styles/globals.css";
import "~/styles/deresearcher.css";
import { UIProvider } from "~/_components/final/Providers/UIProvider";
import Navbar, { NavLink } from "~/_components/final/Navbar";

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
export const buildNavLinks: NavLink[] = [
  {
    name: "Home",
    href: "/build",
  },
  {
    name: "Governance",
    href: "/build/governance",
  },
  {
    name: "Crowdfunding",
    href: "/build/crowdfunding",
  },
  {
    name: "Bounties", // TODO: Protect route & state with auth
    href: "/build/bounties",
  },
];
export const metadata: Metadata = {
  title: {
    default: "Build",
    template: "%s | build",
  },
  description: "Build with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>
          <Navbar links={buildNavLinks} />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
