"use client";
import type { GetStaticPaths } from "next";
import { Button } from "~/_components/final/ui/button";

import bounties from "~/constants/bounty.json";
import applicants from "~/constants/dummyApplicants.json";
import H1 from "~/_components/final/H1";
import H3 from "~/_components/final/H3";
import P from "~/_components/final/P";
import type { Item } from "~/_components/final/Dashboard/Table";
import Image from "next/image";
import { useEffect, useState } from "react";
import Table from "~/_components/final/Dashboard/Table";
import { APPLICANTS_COLUMNS } from "~/lib/utils/constants";
import { DAO, Proposal } from "~/server/api/routers/dao/read";
import { Decimal } from "@prisma/client/runtime/library";
import { DAOType, ProposalStatus } from "@prisma/client";
import { DataTable } from "~/_components/final/Table/crowdfunding";
import { ColumnDef } from "@tanstack/react-table";
import { cn } from "~/utils";
import { useRouter } from "next/navigation";

const columns: ColumnDef<Proposal>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
        {row.original.title}
      </span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {row.original.description}
        </span>
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {row.original.status}
        </span>
      </span>
    ),
  },
  {
    accessorKey: "quorum",
    header: "Quorum",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        {row.original.quorum.toString()}
      </span>
    ),
  },
  {
    accessorKey: "forVotes",
    header: "For Votes",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        {row.original.forVotes.toString()}
      </span>
    ),
  },
  {
    accessorKey: "ends",
    header: "Ends",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        {row.original.endDate.toLocaleDateString()}
      </span>
    ),
  },
];

interface ManageProps {
  item: Item | undefined;
  name: string;
  handleClick: () => void;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bounties.map((bounty) => ({
    params: { id: bounty.id },
  }));

  return { paths, fallback: false };
};

export default function ManageDAO({ dao }: { dao: DAO }) {
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
        <H1 className="my-3 text-center">{dao?.name ?? ""}</H1>
        <pre className="text-wrap text-lg font-medium">{dao?.description}</pre>
        <div className="my-4">
          <P className="font-semibold">Type: {getStatus(dao?.type ?? "")}</P>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Treasury Size:
            <div className="aspect-square w-7 rounded-full bg-primary">
              <Image alt="solana" src="/solana.svg" width={30} height={30} />
            </div>
            {dao?.circulatingSupply.toString()} SOL
          </p>
        </div>
        <Button
          onClick={() => router.push("/build/governance/dao/proposal/new")}
          className={cn(
            "w-fit whitespace-nowrap rounded-md border border-green-600 bg-green-600 p-2",
          )}
        >
          + New Campaign
        </Button>
      </div>

      <div>
        <H3 className="my-5 text-center font-bold text-primary">Proposals</H3>
        <DataTable columns={columns} data={dao?.proposals ?? []} />
      </div>
    </div>
  );
}
