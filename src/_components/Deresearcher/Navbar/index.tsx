"use client";
import { Logo } from "../Logo";
import { usePathname } from "next/navigation";
import { Wallet } from "./Wallet";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { SearchBar } from "../Dashboard/Navbar";
import { DERESEARCHER_HOME } from "~/constant";

export const NavLinks = [
  {
    name: "Home",
    href: DERESEARCHER_HOME,
  },
  {
    name: "Research",
    href: `${DERESEARCHER_HOME}/research`,
  },
  {
    name: "Dashboard", // TODO: Protect route & state with auth
    href: `${DERESEARCHER_HOME}/dashboard`,
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="flex max-w-3xl flex-1 items-center">
        <Link href={DERESEARCHER_HOME} className="mr-4">
          <Logo />
        </Link>
        <button className="hidden flex-1 sm:block">
          <span className="sr-only">Search</span>
          <SearchBar placeholder="Search the universe" />
        </button>
      </div>
      <div className="hidden flex-row justify-between gap-[20px] tablet:flex">
        {NavLinks.map((link) => (
          <div
            key={link.name}
            className={
              pathname === link.href
                ? "flex flex-row items-center gap-[10px] border-b-2 border-primary p-[5px]"
                : "flex flex-row items-center gap-[10px] border-b-2 border-transparent p-[5px]"
            }
          >
            {/* <Image src={"/navbar-link.svg"} width={20} height={20} alt="link" /> */}
            <Link href={link.href} className="font-bold text-zinc-800">
              {link.name}
            </Link>
          </div>
        ))}
        <Wallet />
      </div>
      <MobileMenu pathname={pathname} />
    </nav>
  );
};

export default Navbar;
