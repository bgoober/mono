"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "~/_components/Deresearcher/ui/button";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("./DynamicEditor"), { ssr: false });

export default function PeerReviewEditor({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isTransitioned, setIsTransitioned] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsTransitioned(true);
      });
    } else {
      setIsTransitioned(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsTransitioned(false);
    setTimeout(onClose, 300); // Match the transition duration
  };

  const handleSubmit = (data: { title: string; content: string }) => {
    console.log(data);
  };

  return (
    <div
      ref={editorRef}
      className={`fixed inset-x-0 bottom-0 z-50 h-[60vh] w-full shadow-lg transition-transform duration-300 ease-out will-change-transform md:left-auto md:right-0 md:top-0 md:h-full md:w-1/3 md:shadow-none ${
        isTransitioned
          ? "translate-y-0 md:translate-x-0"
          : "translate-y-full md:translate-x-full md:translate-y-0"
      }`}
    >
      <div className="flex h-full flex-col p-4">
        <div className="mb-4 flex-grow overflow-hidden rounded-lg bg-zinc-100 p-4 shadow-md">
          <div className="flex items-center justify-end">
            <Button size="icon" onClick={handleClose} variant="ghost">
              <X className="text-zinc-10 h-5 w-5 font-black" />
            </Button>
          </div>
          {isTransitioned && (
            <DynamicEditor onClose={handleClose} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
