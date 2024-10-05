import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import papers from "~/constants/dummyPapers.json";
import { PAPER_STATUS } from "~/lib/utils/constants";

// TODO: This will fetch published papers
const publishedPapers = papers.filter(
  (paper) => paper.status === PAPER_STATUS.PUBLISHED,
);

export default async function ResearchPage() {
  return <ResearchLayout title="Published Research" papers={publishedPapers} />;
}
