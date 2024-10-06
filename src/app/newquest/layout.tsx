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
    href: "/build/crowdfunding",
  },
  {
    name: "Manage",
    href: "/build/governance/dao/manage",
  },
  {
    name: "Bounties", // TODO: Protect route & state with auth
    href: "/newquest/bounties",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>
          <Navbar links={navLinks} session={session} />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
