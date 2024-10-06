import H3 from "~/_components/final/H3";
import Table from "~/_components/final/Dashboard/Table";
import Link from "next/link";
import { Button } from "~/_components/final/ui/button";
import users from "~/constants/dummyUser.json";
import { BOUNTIES_COLUMNS } from "~/lib/utils/constants";
import H4 from "~/_components/final/H4";
import bounties from "~/constants/bounty.json";
import H1 from "~/_components/degenspace/H1";

export default function BountiesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-end md:justify-between">
        <H1 className="hidden md:block">Bounties</H1>
        <Link href="/newquest/create">
          <Button className="text-sm text-white">Create new bounty</Button>
        </Link>
      </div>
      <div className="flex flex-col">
        {bounties.length === 0 && (
          <H4 className="pt-10 text-center text-zinc-600">
            No bounties found. Create a new one ⚡
          </H4>
        )}
        {bounties.length > 0 && (
          <Table columns={BOUNTIES_COLUMNS} data={bounties} marginTop="mt-4" />
        )}
      </div>
    </div>
  );
}
