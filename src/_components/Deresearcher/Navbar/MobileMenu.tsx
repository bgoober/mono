"use client";
import Image from "next/image";
import { useState } from "react";
import { Wallet } from "./Wallet";
import { NavLinks } from "./Navbar";
import Link from "next/link";
import { Search } from "lucide-react";

interface MobileMenuProps {
  pathname: string;
}

export const MobileMenu = ({ pathname }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="sm:hidden flex items-center">
      <button className="p-2 mr-2 hover:bg-zinc-100 rounded-md transition-colors duration-200">
        <Search className="h-5 w-5 text-zinc-600" />
      </button>
      <button
        onClick={toggleMenu}
        title="menu"
        className="flex flex-row gap-[3px] items-center"
      >
        <Image src={"/WF Icon Button.svg"} width={35} height={35} alt="logo" />
      </button>

      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } flex-col gap-4 w-full py-4 absolute left-0 top-20 border-2 border-primary rounded-md bg-background`}
      >
        {NavLinks.map((link) => (
          <div
            key={link.name}
            className={
              pathname === link.href
                ? "flex hover:bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center bg-muted"
                : "flex hover:bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center"
            }
          >
            <Image src={"/navbar-link.svg"} width={20} height={20} alt="link" />
            <Link
              href={link.href}
              className="block flex-1 text-primary font-bold py-[10px]"
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
