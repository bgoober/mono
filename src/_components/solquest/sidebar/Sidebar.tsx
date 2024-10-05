"use client";
import { FaFilter } from "react-icons/fa6";
import { IconButton, CloseButton } from "../general/ui/Button";
import { useState } from "react";

export default function Sidebar() {
  const [viewFilter, setViewFilter] = useState<boolean>(false);
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
        <Option>Frontend</Option>
        <Option>Backend</Option>
        <Option>Rust</Option>

        <Label>Status</Label>
        <Option>Open</Option>
        <Option>In Progress</Option>
        <Option>Completed</Option>
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

const Option: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      type="button"
      className="m-3 block text-base text-slate-500 hover:text-slate-800"
    >
      {children}
    </button>
  );
};
