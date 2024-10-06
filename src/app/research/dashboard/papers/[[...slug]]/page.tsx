import OverviewComponent from "~/_components/final/Dashboard/Overview";
import MintedComponent from "~/_components/final/Dashboard/Minted";
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
