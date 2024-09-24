import Image from "next/image";
import P from "./P";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-[3px] items-center">
      <Image src={"/atom3.svg"} width={50} height={50} alt="logo" />
      <P className="font-bold hidden md:block">deResearcher</P>
    </div>
  );
};
