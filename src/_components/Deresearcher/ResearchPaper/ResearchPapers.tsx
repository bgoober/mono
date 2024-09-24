import React from "react";
import { researchPapers } from "./dummyData";
import { ResearchPaperCard } from "./ResearchPaperCard";

export const ResearchPapers = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {researchPapers.map((paper) => {
        return <ResearchPaperCard key={paper.title} {...paper} />;
      })}
    </div>
  );
};
