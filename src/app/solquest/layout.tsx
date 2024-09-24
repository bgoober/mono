import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletContextProvider } from "~/_components/solquest/providers/WalletContextProvider";
import Navbar from "~/_components/solquest/general/Navbar";
import Footer from "~/_components/solquest/general/Footer";
import "@solana/wallet-adapter-react-ui/styles.css";
import "~/styles/globals.css";
import "~/styles/solquest.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolQuest",
  description: "Solana's number one bounty board!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WalletContextProvider>
        <body
          className={`bg-gradient-main relative flex min-h-screen w-screen flex-col overflow-x-hidden bg-fixed text-lg text-white ${inter.className}`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </WalletContextProvider>
    </html>
  );
}
