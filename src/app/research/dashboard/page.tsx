import DashboardCard from "~/_components/final/Dashboard/Card";
import H3 from "~/_components/final/H3";
import Table from "~/_components/final/Dashboard/Table";
import { COLUMNS, PAPER_STATUS } from "~/lib/utils/constants";
import papers from "~/constants/dummyPapers.json";
import P from "~/_components/final/P";

export default async function DashboardPage() {
  const latestPeerReviewingPapers =
    papers
      .filter((paper) => paper.status === PAPER_STATUS.PEER_REVIEWING)
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )
      .slice(0, 5)
      .map((paper) => ({
        id: paper.id,
        title: paper.title,
        authors: paper.authors.join(", "),
        createdDate: new Date(paper.created_at).toISOString().split("T")[0],
        domains: paper.domains.join(", "),
        status: paper.status,
      })) || [];

  return (
    <main className="min-h-full flex-1 overflow-y-auto bg-zinc-100 px-6 py-8">
      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CardContent.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            path={card.path}
          />
        ))}
      </div>
      <H3 className="mt-8 text-center text-zinc-700 md:text-start">
        Latest Peer Review Papers
      </H3>
      {/* Table */}
      {latestPeerReviewingPapers.length === 0 ? (
        <P className="pt-10 text-center text-zinc-600">
          No peer-reviewing papers found. Create a new paper to get started.
        </P>
      ) : (
        <div className="overflow-x-auto">
          <Table columns={COLUMNS} data={latestPeerReviewingPapers} />
        </div>
      )}
    </main>
  );
}

// Fake data
const CardContent = [
  {
    title: "Complete your profile ⚡",
    description:
      "Ensure your profile is up to date to maximize visibility and enhance collaboration opportunities.",
    buttonText: "Complete Profile",
    path: "/research/dashboard/profile",
  },
  {
    title: "Upload your paper 🦒",
    description:
      "Contribute to the community by sharing your research and gaining valuable peer feedback.",
    buttonText: "Upload Paper",
    path: "/research/dashboard/papers/create",
  },
];
