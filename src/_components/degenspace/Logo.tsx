"use client";
import Image from "next/image";
import P from "./P";
import { usePathname, useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = () => {
    if (path !== "/") router.push("/");
  };
  return (
    <div
      className="flex flex-row items-center cursor-pointer hover:bg-backgroundHover  rounded px-[10px]"
      onClick={handleClick}
    >
      <P className="font-bold text-[20px] mr-[-8px]">degen</P>
      <Image src={"/solana.svg"} width={50} height={50} alt="logo" />
      <P className="font-bold text-[20px] ml-[-10px]">pace</P>
    </div>
  );
};
