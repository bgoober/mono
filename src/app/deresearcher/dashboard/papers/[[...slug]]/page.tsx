import OverviewComponent from "~/_components/Deresearcher/Dashboard/Overview";
import MintedComponent from "~/_components/Deresearcher/Dashboard/Minted";
import P from "~/_components/Deresearcher/P";
import { PAPER_STATUS } from "~/lib/utils/constants";

export default function DashboardPapers({
  params,
}: {
  params: { slug: string[] };
}) {
  if (params.slug[0] === PAPER_STATUS.MINTED) {
    return <MintedComponent />;
  }

  return <OverviewComponent />;
}
