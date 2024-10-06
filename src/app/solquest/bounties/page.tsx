"use client";
import H3 from "~/_components/final/H3";
import H4 from "~/_components/final/H4";
import Sidebar from "~/_components/solquest/sidebar/Sidebar";
import Search from "./search";
import { Button } from "~/_components/final/ui/button";
import { Listing } from "~/_components/solquest/general/Listing";
import dummyBounties from "~/constants/bounty.json";
import { useState } from "react";
import Link from "next/link";

export default function Bounties() {
  const [bounties, setBounties] = useState(dummyBounties);
  const search = (text: string) => {
    setBounties(
      dummyBounties.filter(
        (bounty) =>
          bounty.title.includes(text) ||
          bounty.publisher.includes(text) ||
          bounty.details.includes(text),
      ),
    );
  };
  return (
    <main className="m-auto flex w-full flex-grow flex-col px-5 sm:px-12">
      <div className="my-4 flex items-center justify-between">
        <H3>Bounties</H3>
        <Link href="/solquest/bounties/create/create" className="m-5">
          <Button className="text-sm text-white">Create new bounty</Button>
        </Link>
      </div>
      <section className="my-5 flex h-max flex-1 flex-col gap-3 md:flex-row">
        <Sidebar />
        <div className="min-h-[calc(100vh-100px)] flex-1">
          <Search search={search} />
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
