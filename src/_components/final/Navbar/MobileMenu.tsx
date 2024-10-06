"use client";
import Image from "next/image";
import { useState } from "react";
import { Wallet } from "./Wallet";
import { NavLink } from "./";
import Link from "next/link";
import { Search } from "lucide-react";
import { type Session } from "next-auth";

interface MobileMenuProps {
  pathname: string;
  links: NavLink[];
  session: Session | null;
}

export const MobileMenu = ({ pathname, links, session }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="z-50 flex items-center lg:hidden">
      <button className="mr-2 rounded-md p-2 transition-colors duration-200 hover:bg-zinc-100">
        <Search className="h-5 w-5 text-zinc-600" />
      </button>
      <button
        onClick={toggleMenu}
        title="menu"
        className="flex flex-row items-center gap-[3px]"
      >
        <Image src={"/WF Icon Button.svg"} width={35} height={35} alt="logo" />
      </button>
      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } absolute left-0 top-20 w-full flex-col gap-4 rounded-md border-2 border-none bg-background py-4 shadow-lg`}
      >
        {links.map((link) => (
          <div
            key={link.name}
            className={
              pathname === link.href
                ? "flex flex-row items-center gap-[10px] bg-muted px-[15px]"
                : "flex flex-row items-center gap-[10px] px-[15px] hover:bg-muted/40"
            }
          >
            <Link
              href={link.href}
              className={`block flex-1 py-[10px] font-bold ${
                pathname === link.href
                  ? "text-primary"
                  : "text-zinc-500 hover:text-primary"
              }`}
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </Link>
          </div>
        ))}
        <div className="mb-2 flex items-center justify-center">
          <Wallet />
          <AuthShowcase session={session} />
        </div>
      </div>
    </div>
  );
};

function AuthShowcase({ session }: { session: Session | null }) {
  return (
    <div className="ml-4">
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-md bg-primary px-8 py-2 text-[16px] font-normal text-white transition-all hover:bg-primary/90"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
