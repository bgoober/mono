"use client";

import React, { useState } from "react";
import { LeftSideBar } from "../LeftSideBar/LeftSideBar";
import { MainLayout } from "../MainLayout/MainLayout";
import { RightSideBar } from "../RightSideBar/RightSideBar";
import { Button } from "~/_components/ui/button";
import { PlusIcon } from "lucide-react";
import { PostModal } from "../Modal/PostModal";

export const View = ({ children }: { children: React.ReactNode }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-100">
      <div className="flex">
        {/* LeftSideBar - hidden on mobile, visible from md breakpoint */}
        <div className="fixed hidden h-screen w-1/4 overflow-y-auto md:block">
          <LeftSideBar onNewPost={() => setIsPostModalOpen(true)} />
        </div>

        {/* Spacer for LeftSideBar - hidden on mobile, visible from md breakpoint */}
        <div className="hidden w-1/4 md:block" />

        {/* MainLayout - full width on mobile, adjusted width on larger screens */}
        <div className="w-full md:w-3/4 lg:w-1/2">
          <MainLayout>{children}</MainLayout>
        </div>

        {/* Spacer for RightSideBar - hidden on mobile and tablet, visible from lg breakpoint */}
        <div className="hidden w-1/4 lg:block" />

        {/* RightSideBar - hidden on mobile and tablet, visible from lg breakpoint */}
        <div className="fixed right-0 hidden h-screen w-1/4 overflow-y-auto lg:block">
          <RightSideBar />
        </div>

        {/* Floating Action Button - visible only on mobile */}
        <Button
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg md:hidden"
          onClick={() => setIsPostModalOpen(true)}
        >
          <PlusIcon className="h-6 w-6" />
        </Button>

        {/* PostModal */}
        <PostModal
          isOpen={isPostModalOpen}
          onClose={() => setIsPostModalOpen(false)}
        />
      </div>
    </div>
  );
};
