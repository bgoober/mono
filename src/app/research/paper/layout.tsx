import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper",
};

export default async function ResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
