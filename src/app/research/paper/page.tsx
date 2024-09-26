import { Metadata } from "next";
import { PAPER_STATUS } from "~/lib/utils/constants";
import ResearchLayout from "~/_components/final/ResearchPaper/ResearchPaperLayout";
import papers from "~/constants/dummyPapers.json";

export const metadata: Metadata = {
  title: "Research",
};

export default async function ResearchPage() {
  return <ResearchLayout title="Published Research" papers={papers} />;
}
