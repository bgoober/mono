import type { Metadata } from "next";
import { Arbutus, Atkinson_Hyperlegible, Inter } from "next/font/google";
import { WalletContextProvider } from "~/_components/solquest/providers/WalletContextProvider";
import Navbar, { NavLink } from "~/_components/final/Navbar";
import Footer from "~/_components/solquest/general/Footer";
import "@solana/wallet-adapter-react-ui/styles.css";
import "~/styles/globals.css";
import "~/styles/deresearcher.css";
import { UIProvider } from "~/_components/degenspace/providers/UIProvider";
import { getServerAuthSession } from "~/server/auth";

const inter = Inter({ subsets: ["latin"] });
const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/build",
  },
  {
    name: "Fund",
    href: "/build/fund",
  },
  {
    name: "Manage",
    href: "/build/manage",
  },
  {
    name: "Bounties", // TODO: Protect route & state with auth
    href: "/newquest/bounties",
  },
];

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  return (
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>
          <Navbar links={navLinks} session={session} />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
