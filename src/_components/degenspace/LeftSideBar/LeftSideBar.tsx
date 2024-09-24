"use client";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { JobBoard } from "./JobBoard";
import { Search } from "./Search";
import { UserInfo } from "./UserInfo";
import { Wallet } from "./Wallet";

export const LeftSideBar = () => {
  return (
    <div className="w-1/3 h-full p-2 flex flex-col items-center">
      <div className="mt-[20px] flex flex-col gap-[10px] w-full h-full items-start">
        <Logo />
        <Wallet />
        <UserInfo />
        <Search />
        <JobBoard />
      </div>
    </div>
  );
};
