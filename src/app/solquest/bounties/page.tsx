import H3 from "~/_components/final/H3";
import H4 from "~/_components/final/H4";
import Sidebar from "~/_components/solquest/sidebar/Sidebar";
import Search from "./search";
import { Button } from "~/_components/final/ui/button";
import { Listing } from "~/_components/solquest/general/Listing";
import bounties from "~/constants/bounty.json";
import Link from "next/link";

export default function Bounties() {
  return (
    <main className="m-auto flex w-full flex-1 flex-col px-5 tablet:px-12">
      <div className="flex justify-between items-center my-4">
        <H3>Bounties</H3>
        <Link href="/solquest/bounties/create" className="m-5">
          <Button className="text-sm text-white">Create new bounty</Button>
        </Link>
      </div>
      
      <section className="my-5 h-max flex flex-col md:flex-row flex-1 gap-3">
        <Sidebar />

        <div className="flex-1">
          <Search />
          {bounties.length === 0 && (
            <H4 className="pt-10 text-center text-zinc-600">
              No bounties found. Create a new one ⚡
            </H4>
          )}
          {bounties?.map((bounty) => (
            <Listing
              key={bounty.title}
              title={bounty.title}
              details={bounty.details}
              pay={bounty.pay}
              publisher={bounty.publisher}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
