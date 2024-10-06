"use client";
import Image from "next/image";
import P from "./P";
import { usePathname, useRouter } from "next/navigation";

export default function DegenSpaceLogo() {
  const router = useRouter();
  const path = usePathname();

  const handleClick = () => {
    if (path !== "/") router.push("/");
  };
  return (
    <div
      className="cursor-pointerrounded flex flex-row items-center px-[10px]"
      onClick={handleClick}
    >
      <P className="mr-[-8px] text-[20px] font-bold text-zinc-900">degen</P>
      <Image src={"/solana.svg"} width={50} height={50} alt="logo" />
      <P className="ml-[-8px] text-[20px] font-bold text-zinc-900">pace</P>
    </div>
  );
}
