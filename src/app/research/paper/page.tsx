import { Metadata } from "next";
import { PAPER_STATUS } from "~/lib/utils/constants";
import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import { Paper } from "~/lib/validation";
import papers from "~/constants/dummyPapers.json";

export const metadata: Metadata = {
  title: "Research",
};

export async function getPapers(status: string): Promise<Paper[]> {
  return (papers as Paper[]).filter((paper) => paper.status === status);
}

export default async function ResearchPage() {
  const papers = await getPapers(PAPER_STATUS.PUBLISHED);

  return <ResearchLayout title="Published Research" papers={papers} />;
}
