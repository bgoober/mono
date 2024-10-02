"use client";
import type { GetStaticPaths } from "next";
import { Button } from "~/_components/solquest/general/ui/Button";
import bounties from "~/constants/bountyWorking.json";
import applicants from "~/constants/dummyApplicants.json";
import H1 from "~/_components/final/H1";
import H3 from "~/_components/final/H3";
import P from "~/_components/final/P";
import type { Item } from "~/_components/final/Dashboard/Table";
import Image from "next/image";
import { useEffect, useState } from "react";
import Table from "~/_components/final/Dashboard/Table";
import { APPLICANTS_COLUMNS } from "~/lib/utils/constants";
import { getStaticPaths } from "./static";

type bounty = {
  id: string;
  title: string;
  pay: number;
  details: string;
  publisher: string;
  track: string;
  status: string;
  createdDate: string;
};

export default function Bounty({ params }: { params: { id: string } }) {
  const [pageBounty, setPageBounty] = useState<bounty | undefined>(undefined);

  const getStatus = (status: string) => {
    if (status == "in_progress") {
      return "IN PROGRESS";
    } else {
      return status.toUpperCase();
    }
  };

  const onRowClick = (item: Item) => {
    console.log("Dev ID: " + item.id);
  };

  useEffect(() => {
    setPageBounty(bounties.find((bounty) => bounty.id == params.id));
  }, [params]);

<<<<<<< HEAD
  return(
    <div className="m-auto my-4 flex w-full flex-1 flex-col px-5 sm:px-12">
      <div className="p-2 bg-white rounded-md">
        <H1 className="text-center my-3">{pageBounty?.title??""}</H1>
        <pre className="text-wrap text-lg font-medium">{pageBounty?.details}</pre>
=======
  return (
    <div className="tablet:px-12 m-auto my-4 flex w-full flex-1 flex-col px-5">
      <div className="rounded-md bg-white p-2">
        <H1 className="my-3 text-center">{pageBounty?.title ?? ""}</H1>
        <pre className="text-wrap text-lg font-medium">
          {pageBounty?.details}
        </pre>
>>>>>>> 2aad840330928771fb5a9cee47454f99ebf6f8b9
        <div className="my-4">
          <P className="font-semibold">
            Status: {getStatus(pageBounty?.status ?? "")}
          </P>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Pay:
            <div className="aspect-square w-7 rounded-full bg-primary">
              <Image alt="solana" src="/solana.svg" width={30} height={30} />
            </div>
            {pageBounty?.pay} SOL
          </p>
        </div>

        {pageBounty?.status == "completed" && (
          <div className="mx-auto my-3 flex max-w-4xl items-center justify-center gap-3">
            <Button type={2}>Withdraw Pay</Button>
          </div>
        )}
      </div>

      <H3 className="my-5 text-center font-bold text-primary">Developers</H3>
      {bounties.length > 0 && (
        <Table
          columns={APPLICANTS_COLUMNS}
          data={applicants.filter((app) => app.status == "accepted")}
          marginTop="mt-4"
          whenRowClick={onRowClick}
        />
      )}
    </div>
  );
}
