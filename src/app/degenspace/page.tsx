"use client";

import React, { useState } from "react";
import { flicks } from "~/_components/degenspace/Flick/dummyData";
import { Flick } from "~/_components/degenspace/Flick/Flick";

export default function Home() {
  const [expandedFlickId, setExpandedFlickId] = useState<string | null>(null);

  const toggleFlick = (flickId: string) => {
    setExpandedFlickId((prevId) => (prevId === flickId ? null : flickId));
  };

  return (
    <div className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full flex-col">
            {flicks.map((flick) => (
              <Flick
                key={flick.id}
                {...flick}
                isExpanded={expandedFlickId === flick.id}
                onToggle={() => toggleFlick(flick.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
