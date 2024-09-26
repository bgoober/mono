import { Metadata } from "next";
import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import { PAPER_STATUS } from "~/lib/utils/constants";
import _papers from "~/constants/dummyPapers.json";
import { Paper } from "~/lib/validation";

export default async function PeerReviewPage() {
  const papers = _papers as Paper[];

  return <ResearchLayout title="Peer-Reviewing Research" papers={papers} />;
}
