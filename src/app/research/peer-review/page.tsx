import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import { PAPER_STATUS } from "~/lib/utils/constants";
import _papers from "~/constants/dummyPapers.json";
import type { Paper } from "~/lib/validation";

export default async function PeerReviewPage() {
  const papers = _papers as Paper[];

  const peerReviewPapers = papers.filter(
    (paper) => paper.status === PAPER_STATUS.PEER_REVIEWING,
  );
  return (
    <ResearchLayout title="Peer-Reviewing Research" papers={peerReviewPapers} />
  );
}
