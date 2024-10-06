"use client";
import { UserCircle } from "lucide-react";
import { Wallet } from "./Wallet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/_components/ui/dropdown-menu";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <UserCircle className="h-8 w-8 text-primary" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 border border-gray-900 bg-black p-4"
        align="end"
        sideOffset={5}
      >
        <div className="mb-4 rounded-md bg-gray-900 p-3 text-center text-sm">
          Logged in as <span className="font-bold">@johndoe</span>
        </div>
        <DropdownMenuItem className="p-0 hover:bg-transparent focus:bg-transparent">
          <Wallet />
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0 hover:bg-transparent focus:bg-transparent">
          <button className="mt-4 w-full text-red-500 transition-colors hover:bg-transparent hover:text-red-400">
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
