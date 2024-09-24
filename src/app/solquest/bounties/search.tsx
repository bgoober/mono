import { FaSearch } from "react-icons/fa";
import { IconButton } from "~/_components/solquest/general/ui/Button";

export default function Search() {
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
        />

        <IconButton>
          <FaSearch />
        </IconButton>
      </div>
    </div>
  );
}
