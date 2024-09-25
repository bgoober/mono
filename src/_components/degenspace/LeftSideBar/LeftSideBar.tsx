"use client";
import { Logo } from "../Logo";
import { Button } from "~/_components/ui/button";
import { JobBoard } from "./JobBoard";
import { Search } from "./Search";
import { UserInfo } from "./UserInfo";
import { Wallet } from "./Wallet";

export const LeftSideBar = () => {
  return (
    <div className="flex h-full w-1/3 flex-col items-center p-2">
      <div className="mt-[20px] flex h-full w-full flex-col items-start gap-[10px]">
        <Logo />
        <Wallet />
        <UserInfo />
        <Search />
        <JobBoard />
      </div>
    </div>
  );
};
