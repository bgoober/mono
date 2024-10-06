// import UserButton from "@/components/UserButton";
import Link from "next/link";
import SearchField from "./Search";
import { Logo } from "~/_components/degenspace/DegenSpaceLogo";
import { UserDropdown } from "~/_components/degenspace/LeftSideBar/UserDropdown";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/30 backdrop-blur-md">
      <div className="container flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-white">
            <Logo />
          </Link>
          <SearchField />
        </div>
        <UserDropdown />
      </div>
    </header>
  );
};
