import type { Metadata } from "next";
import { Arbutus, Atkinson_Hyperlegible, Inter } from "next/font/google";
import { WalletContextProvider } from "~/_components/solquest/providers/WalletContextProvider";
// import Navbar from "~/_components/solquest/general/Navbar";
import Navbar from "~/_components/final/Navbar";
import Footer from "~/_components/solquest/general/Footer";
import { getServerAuthSession } from "~/server/auth";
import "@solana/wallet-adapter-react-ui/styles.css";
import "~/styles/globals.css";
import "~/styles/deresearcher.css";

const inter = Inter({ subsets: ["latin"] });

const links = [
  {
    name: "Home",
    href: "/solquest"
  },
  {
      name: "Bounties",
      href: "/solquest/bounties"
  },
  {
      name: "Manage",
      href: "/solquest/manage"
  },
]

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
  title: "SolQuest",
  description: "Solana's number one bounty board!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  return (
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <WalletContextProvider>
        <body
          className={`relative flex min-h-screen max-w-[100vw] w-full flex-col overflow-x-hidden bg-fixed bg-zinc-100 text-lg ${inter.className}`}
        >
          <Navbar links={links} session={session}/>
          {children}
          <Footer />
        </body>
      </WalletContextProvider>
    </html>
  );
}

// bg-gradient-main 