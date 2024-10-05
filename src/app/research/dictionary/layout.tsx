import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dictionary",
};

export default function DictionaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
