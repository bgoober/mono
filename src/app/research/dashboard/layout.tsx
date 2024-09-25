import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UIProvider } from "~/_components/Deresearcher/Providers/UIProvider";
import Sidebar from "~/_components/Deresearcher/Dashboard/Sidebar";
import DashboardNavbar from "~/_components/Deresearcher/Dashboard/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-zinc-100">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <DashboardNavbar />
        <div className="flex-1 overflow-x-hidden bg-zinc-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
