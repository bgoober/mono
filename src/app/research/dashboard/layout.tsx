import type { Metadata } from "next";
import Sidebar from "~/_components/final/Dashboard/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex h-full overflow-y-auto bg-zinc-100`}>
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto h-screen px-6 py-8">{children}</div>
      </div>
    </div>
  );
}
