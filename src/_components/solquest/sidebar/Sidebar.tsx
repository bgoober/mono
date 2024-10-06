"use client";
import { FaFilter } from "react-icons/fa6";
import { IconButton, CloseButton } from "../general/ui/Button";
import { bountyFilter } from "~/app/solquest/bounties/bounties";
import { useState } from "react";

interface props{
  setTrackFilter: (e:string) => void,
  setStatusFilter: (e:string) => void,
  filter: bountyFilter
}

export default function Sidebar({setTrackFilter, setStatusFilter, filter}:props) {
  const [viewFilter, setViewFilter] = useState<boolean>(false);
  const status = [
    {name: "All", value: "ALL"},
    {name: "In Progress", value: "IN_PROGRESS"},
    {name: "Open", value: "OPEN"},
    {name: "Completed", value: "COMPLETED"}
  ]
  const tracks = [
    {name: "All", value: "ALL"},
    {name: "Frontend", value: "FRONTEND"},
    {name: "Backend", value: "BACKEND"},
    {name: "Rust", value: "RUST"}
  ]
  return (
    <div>
      <div className={"flex items-start sm:hidden"}>
        <IconButton
          handleClick={() => setViewFilter(!viewFilter)}
          size={"sm"}
          type={1}
        >
          <FaFilter />
        </IconButton>
      </div>

      <div
        className={`absolute top-0 w-[300px] max-w-80 border-2 border-zinc-300 ${viewFilter ? "left-0" : "-left-80"} h-full min-w-72 bg-primary-foreground p-4 transition-all sm:relative sm:left-0 sm:w-2/5 sm:rounded-lg`}
      >
        <div className="block sm:hidden">
          <CloseButton
            handleClick={() => {
              setViewFilter(false);
            }}
          />
        </div>

        <Label>Tracks</Label>
        {tracks.map(track => 
          <Option 
          key={track.value} 
          active={filter.track == track.value} 
          click={() => setTrackFilter(track.value)}>{track.name}</Option>
        )}

        <Label>Status</Label>
        {status.map(status => 
          <Option 
          key={status.value} 
          active={filter.status == status.value} 
          click={() => setStatusFilter(status.value)}>{status.name}</Option>
        )}
      </div>
    </div>
  );
}

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <p className="my-2 text-secondary">
        <b>{children}</b>
      </p>
    </div>
  );
};

const Option: React.FC<{ children: React.ReactNode, active:boolean, click: () => void }> = ({ children, active, click }) => {
  return (
    <button onClick={click} type="button" className={`m-3 block text-slate-500 hover:text-slate-800 ${active && "font-bold"}`}>
      {children}
    </button>
  );
};
