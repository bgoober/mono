import H3 from "~/_components/final/H3";
import Table from "~/_components/final/Dashboard/Table";
import Link from "next/link";
import { Button } from "~/_components/final/ui/button";
import users from "~/constants/dummyUser.json";
import { BOUNTIES_COLUMNS } from "~/lib/utils/constants";
import H4 from "~/_components/final/H4";
import bounties from "~/constants/bounty.json";

export default function BountiesContent() {
  return (
    <div className="mx-10 mt-10">
      <div className="mb-6 flex items-center justify-end md:justify-between">
        <H3 className="hidden md:block">Bounties</H3>
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
