"use client";
import { FormEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "~/_components/solquest/general/ui/Button";

interface props {
  search?: (text: string) => void;
}

export default function Search({ search }: props) {
  const handleSearch: FormEventHandler<HTMLInputElement> = (event) => {
    if (search) {
      search((event.target as HTMLInputElement).value);
    }
  };
  return (
    <div>
      <div className="flex flex-1 gap-2">
        <input
          placeholder="Search for bounties..."
          className="min-w-20 flex-1 rounded-md border-[1px] border-slate-600 bg-transparent px-4 py-2"
          type="text"
          alt="search"
          title="Search"
          name="search"
          onInput={handleSearch}
        />

        <IconButton>
          <FaSearch />
        </IconButton>
      </div>
    </div>
  );
}
