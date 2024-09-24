import { H1 } from "~/_components/solquest/general/ui/H1";
import Sidebar from "~/_components/solquest/sidebar/Sidebar";
import Search from "./search";
import { Button } from "~/_components/solquest/general/ui/Button";
import { Listing } from "~/_components/solquest/general/Listing";
import bounties from "~/constant/bounty.json";
import Link from "next/link";

export default function Bounties() {
  return (
    <main className="m-auto flex w-full max-w-7xl flex-1 flex-col px-5">
      <Link href="/create" className="m-5">
        <Button type={2}>Create Bounty</Button>
      </Link>
      <H1 margin="sm">Bounties</H1>
      <section className="my-5 flex h-max flex-1 gap-3">
        <Sidebar />
        <div className="flex-1">
          {/* <p>Featured Bounties</p> */}
          <Search />

          {bounties.map((bounty) => (
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
