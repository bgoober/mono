"use client";
import Image from "next/image";
import { useState } from "react";
import { Wallet } from "./Wallet";
import { NavLink } from "./";
import Link from "next/link";
import { Search } from "lucide-react";

interface MobileMenuProps {
  pathname: string;
  links: NavLink[];
}

export const MobileMenu = ({ pathname, links }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex items-center sm:hidden">
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
        } absolute left-0 top-20 w-full flex-col gap-4 rounded-md border-2 border-primary bg-background py-4`}
      >
        {links.map((link) => (
          <div
            key={link.name}
            className={
              pathname === link.href
                ? "flex flex-row items-center gap-[10px] bg-muted px-[15px] hover:cursor-pointer hover:bg-muted"
                : "flex flex-row items-center gap-[10px] px-[15px] hover:cursor-pointer hover:bg-muted"
            }
          >
            <Image src={"/navbar-link.svg"} width={20} height={20} alt="link" />
            <Link
              href={link.href}
              className="block flex-1 py-[10px] font-bold text-primary"
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </Link>
          </div>
        ))}
        <div className="flex justify-center">
          <Wallet />
        </div>
      </div>
    </div>
  );
};
