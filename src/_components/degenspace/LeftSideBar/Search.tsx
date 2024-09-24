import Image from "next/image";
import P from "../P";

export const Search = () => {
  return (
    <div className="flex flex-row gap-[10px] items-center py-[10px] px-[15px] hover:bg-backgroundHover rounded  cursor-pointer">
      <Image src="/search.svg" alt="search" height={30} width={30} />
      <P className="font-bold">Search</P>
    </div>
  );
};
