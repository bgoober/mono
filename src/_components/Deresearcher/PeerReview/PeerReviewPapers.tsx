import React from "react";
import { researchPapers } from "../ResearchPaper/dummyData";
import { PeerReviewCard } from "./PeerReviewCard";

export const PeerReviewPapers = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {researchPapers.map((paper) => {
        return <PeerReviewCard key={paper.title} {...paper} />;
      })}
    </div>
  );
};
