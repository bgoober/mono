"use client";
import { FaFilter } from "react-icons/fa6";
import { IconButton, CloseButton } from "../general/ui/Button";
import { useState } from "react";

export default function Sidebar() {
  const [viewFilter, setViewFilter] = useState<boolean>(false);
  return (
    <>
      <div className={"flex items-start tablet:hidden"}>
        <IconButton
          handleClick={() => setViewFilter(!viewFilter)}
          size={"sm"}
          type={1}
        >
          <FaFilter />
        </IconButton>
      </div>

      <div
        className={`absolute top-0 w-[300px] max-w-80 ${viewFilter ? "left-0" : "-left-80"} h-full bg-slate-900 p-4 transition-all tablet:relative tablet:left-0 tablet:w-2/5 tablet:rounded-lg`}
      >
        <div className="block tablet:hidden">
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
    </>
  );
}

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <p className="my-2 text-secondary">
        <b>{children}</b>
      </p>
    </>
  );
};

const Option: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button type="button" className="m-3 block text-slate-500 hover:text-white">
      {children}
    </button>
  );
};
