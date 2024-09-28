"use client";
import { DesearcherLogo } from "../Logo";
import { usePathname } from "next/navigation";
import { Wallet } from "./Wallet";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { SearchBar } from "../Dashboard/Navbar";
import SolquestLogo from "~/_components/solquest/general/ui/Logo";

const getLogoFromPathname = (pathname: string) => {
  if (pathname.includes("research")) {
    if (pathname.includes("dashboard")) {
      return null;
    }
    return <DesearcherLogo />;
  }
  if (pathname.includes("newquest")) {
    return <SolquestLogo />;
  }
};

export type NavLink = {
  name: string;
  href: string;
};

export const Navbar = ({ links }: { links: NavLink[] }) => {
  const pathname = usePathname();
  const logo = getLogoFromPathname(pathname);

  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="flex max-w-3xl flex-1 items-center">
        <Link href="/" className="mr-4">
          {logo}
        </Link>
        <button className="hidden flex-1 lg:block">
          <span className="sr-only">Search</span>
          <SearchBar placeholder="Search the universe" />
        </button>
      </div>
      <div className="hidden flex-row justify-between gap-[20px] lg:flex">
        {links.map((link) => (
          <div
            key={link.name}
            className={
              pathname === link.href
                ? "flex flex-row items-center gap-[10px] border-b-2 border-primary p-[5px]"
                : "flex flex-row items-center gap-[10px] border-b-2 border-transparent p-[5px]"
            }
          >
            <Link href={link.href} className="font-bold text-zinc-800">
              {link.name}
            </Link>
          </div>
        ))}
        <Wallet />
      </div>
      <MobileMenu pathname={pathname} links={links} />
    </nav>
  );
};

export default Navbar;
