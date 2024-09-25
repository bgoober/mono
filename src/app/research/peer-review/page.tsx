import { Metadata } from "next";
import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import { PAPER_STATUS } from "~/lib/utils/constants";
import { getPapers } from "../paper/page";

export const metadata: Metadata = {
  title: "Peer Review",
};

export default async function PeerReviewPage() {
  const papers = await getPapers(PAPER_STATUS.PEER_REVIEWING);

  return <ResearchLayout title="Peer-Reviewing Research" papers={papers} />;
}
