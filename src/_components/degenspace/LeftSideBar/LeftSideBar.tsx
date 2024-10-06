"use client";

import React from "react";
import { Button } from "~/_components/final/ui/button";

interface LeftSideBarProps {
  onNewPost: () => void;
}

export const LeftSideBar: React.FC<LeftSideBarProps> = ({ onNewPost }) => {
  return (
    <aside className="flex h-full flex-col items-start justify-start border-r border-zinc-200 px-4 pt-12">
      <div className="mb-4 flex w-full justify-center lg:justify-end">
        <Button size="lg" onClick={onNewPost} className="md:w-2/3 lg:w-auto">
          New Post
        </Button>
      </div>
    </aside>
  );
};
