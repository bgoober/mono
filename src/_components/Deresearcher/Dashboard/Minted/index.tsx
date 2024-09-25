import H3 from "~/_components/Deresearcher/H3";
import Table from "../Table";
import users from "~/constants/dummyUser.json";
import { COLUMNS } from "~/lib/utils/constants";
import H4 from "~/_components/Deresearcher/H4";
import P from "../../P";

export default function MintedComponent() {
  // Create a new columns array based on COLUMNS, but replace the last item
  const mintedColumns = [
    ...COLUMNS.slice(0, -1),
    { key: "minted", header: "Minted Times", sortable: true },
  ];

  const mintedPapers =
    users[0]?.papers
      ?.filter((paper) => paper.minted.length > 0)
      ?.map((paper) => ({
        id: paper.id,
        title: paper.title,
        authors: paper.authors.join(", "),
        createdDate: new Date(paper.created_at).toISOString().split("T")[0],
        domains: paper.domains.join(", "),
        minted: paper.minted.length,
        status: paper.status,
      })) || [];

  return (
    <>
      <H3 className="font-semibold">Minted Papers</H3>
      <P className="text-pretty pt-4 text-sm leading-6 text-zinc-700">
        Minted papers are published research read by individuals who are paid in
        SOL. The more people who read your research, the more you can earn ⚡
      </P>
      <div className="flex flex-col">
        {mintedPapers.length === 0 && (
          <H4 className="pt-10 text-center text-zinc-600">
            No minted papers found. Create a new one to earn more ⚡
          </H4>
        )}
        {mintedPapers.length > 0 && (
          <Table columns={mintedColumns} data={mintedPapers} />
        )}
      </div>
    </>
  );
}
