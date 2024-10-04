"use client";
import type { GetStaticPaths } from "next";
import { CloseButton, Button } from "~/_components/solquest/general/ui/Button";
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

interface ManageProps {
  item: Item | undefined;
  name: string;
  handleClick: () => void;
}

export default function Bounty({ params }: { params: { id: string } }) {
  const [pageBounty, setPageBounty] = useState<bounty | undefined>(undefined);
  const [viewManage, setViewManage] = useState<boolean>(false);
  const [applicant, setApplicant] = useState("");

  const getStatus = (status: string) => {
    if (status == "in_progress") {
      return "IN PROGRESS";
    } else {
      return status.toUpperCase();
    }
  };

  const onRowClick = (item: Item) => {
    setApplicant(item.id);
    setViewManage(true);
  };

  useEffect(() => {
    setPageBounty(bounties.find((bounty) => bounty.id == params.id));
  }, [params]);

  return (
    <div className="sm:px-12 m-auto my-4 flex w-full flex-1 flex-col px-5">
      <div className="rounded-md bg-white p-2">
        <H1 className="my-3 text-center">{pageBounty?.title ?? ""}</H1>
        <pre className="text-wrap text-lg font-medium">
          {pageBounty?.details}
        </pre>
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

        {pageBounty?.status == "open" && (
          <div className="mx-auto my-3 flex max-w-4xl items-center justify-between gap-3">
            <Button type={2}>Start Bounty</Button>
            <Button>End Bounty</Button>
          </div>
        )}

        {pageBounty?.status == "in_progress" && (
          <div className="mx-auto my-3 flex max-w-4xl items-center justify-center gap-3">
            <Button type={2}>Bounty Completed</Button>
          </div>
        )}
      </div>

      {pageBounty?.status == "open" && (
        <>
          <H3 className="my-5 text-center font-bold text-primary">
            Applicants
          </H3>
          {bounties.length > 0 && (
            <Table
              columns={APPLICANTS_COLUMNS}
              data={applicants}
              marginTop="mt-4"
              whenRowClick={onRowClick}
            />
          )}
        </>
      )}

      {viewManage && (
        <Manage
          item={applicants.find((app) => app.id == applicant)}
          handleClick={() => {
            setViewManage(false);
          }}
          name={applicants.find((app) => app.id == applicant)?.name ?? ""}
        />
      )}
    </div>
  );
}

const Manage = ({ item, handleClick, name }: ManageProps) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-lg backdrop-brightness-50">
      <section className="relative flex w-[300px] flex-col items-center gap-5 rounded-lg bg-primary-foreground p-3 py-8">
        <CloseButton handleClick={handleClick} />
        <p>
          <b>{name}</b>
        </p>
        {item?.status == "pending" && (
          <>
            <Button type={2}>Accept Application</Button>
            <Button>Reject Application</Button>
          </>
        )}
        {item?.status == "accepted" && (
          <P className="font-semibold text-secondary">
            {item?.status.toUpperCase()}
          </P>
        )}
        {item?.status == "rejected" && (
          <P className="font-semibold text-destructive">
            {item?.status.toUpperCase()}
          </P>
        )}
      </section>
    </div>
  );
};
