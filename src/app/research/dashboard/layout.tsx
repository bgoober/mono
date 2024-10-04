import type { Metadata } from "next";
import { Inter, Arbutus, Atkinson_Hyperlegible } from "next/font/google";
import "~/styles/globals.css";
import "~/styles/deresearcher.css";
import { UIProvider } from "~/_components/final/Providers/UIProvider";
import Sidebar from "~/_components/final/Dashboard/Sidebar";
import Navbar, { NavLink } from "~/_components/final/Navbar";
import { getServerAuthSession } from "~/server/auth";

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
  title: "Dashboard | Research",
  description: "A decentralized research platform on Solana",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  return (
    <html lang="en" className={`${arbutus.variable} ${atkinson.variable}`}>
      <body className={`${inter.className} min-w-[350px]`}>
        <UIProvider>
          <div className="flex h-screen overflow-hidden bg-zinc-100">
            <Sidebar />
            {/* Magic number alert */}
            <div className="flex flex-1 flex-col pt-[7.2px]">
              <Navbar
                links={[
                  {
                    name: "Home",
                    href: "/research/",
                  },
                  {
                    name: "Papers",
                    href: "/research/paper",
                  },
                  {
                    name: "Peer Review",
                    href: "/research/peer-review",
                  },
                  {
                    name: "Dashboard", // TODO: Protect route & state with auth
                    href: "/research/dashboard",
                  },
                  {
                    name: "Dictionary", // TODO: Protect route & state with auth
                    href: "/research/dictionary",
                  },
                ]}
                session={session}
              />
              <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </div>
            </div>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
