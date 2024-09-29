"use client";
import type { GetStaticPaths } from "next";

import bounties from "~/constants/bounty.json";
import H1 from "~/_components/final/H1";
import P from "~/_components/final/P";
import Image from "next/image";
import { Proposal } from "~/server/api/routers/dao/read";
import { useRouter } from "next/navigation";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bounties.map((bounty) => ({
    params: { id: bounty.id },
  }));

  return { paths, fallback: false };
};

export default function ManageProposal({ proposal }: { proposal: Proposal }) {
  const getStatus = (status: string) => {
    if (status == "in_progress") {
      return "IN PROGRESS";
    } else {
      return status.toUpperCase();
    }
  };
  const router = useRouter();
  return (
    <div className="tablet:px-12 m-auto my-4 flex w-full flex-1 flex-col px-5">
      <div className="rounded-md bg-white p-2">
        <H1 className="my-3 text-center">{proposal?.title ?? ""}</H1>
        <pre className="text-wrap text-lg font-medium">
          {proposal?.description}
        </pre>
        <div className="my-4">
          <P className="font-semibold">
            Status: {getStatus(proposal?.status ?? "")}
          </P>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Quorum: {proposal?.quorum.toString()}
          </p>
          <p className="my-3 flex items-center gap-3 font-semibold">
            For Votes: {proposal?.forVotes.toString()}
          </p>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Against Votes: {proposal?.againstVotes.toString()}
          </p>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Abstain Votes: {proposal?.abstainVotes.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}
