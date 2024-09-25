import H3 from "~/_components/Deresearcher/H3";
import Table from "../Table";
import Link from "next/link";
import { Button } from "~/_components/Deresearcher/ui/button";
import users from "~/constants/dummyUser.json";
import { COLUMNS } from "~/lib/utils/constants";
import H4 from "~/_components/Deresearcher/H4";

export default function OverviewComponent() {
  const userPapers =
    users[0]?.papers?.map((paper) => ({
      id: paper.id,
      title: paper.title,
      authors: paper.authors.join(", "),
      createdDate: new Date(paper.created_at).toISOString().split("T")[0],
      domains: paper.domains.join(", "),
      status: paper.status,
    })) || [];

  return (
    <>
      <div className="mb-6 flex items-center justify-end md:justify-between">
        <H3 className="hidden md:block">Overview</H3>
        <Link href="/dashboard/papers/create">
          <Button className="text-sm text-white">Create new paper</Button>
        </Link>
      </div>
      <div className="flex flex-col">
        {userPapers.length === 0 && (
          <H4 className="pt-10 text-center text-zinc-600">
            No papers found. Create a new one ⚡
          </H4>
        )}
        {userPapers.length > 0 && (
          <Table columns={COLUMNS} data={userPapers} marginTop="mt-4" />
        )}
      </div>
    </>
  );
}
