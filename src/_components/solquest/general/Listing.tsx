"use client";
import Image from "next/image";
import Details from "./Details";
import { useState } from "react";
import type { Bounty } from "~/server/api/routers/bounty/read";
import { Session } from "next-auth";

export const Listing: React.FC<{ bounty: Bounty; session: Session | null }> = ({
  bounty,
  session,
}) => {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <div>
      <article
        onClick={() => {
          setViewDetails(true);
        }}
        className="my-4 flex items-center gap-3 p-3 transition-all hover:cursor-pointer hover:bg-slate-200"
      >
        <Image
          src={"/assets/solquest.svg"}
          alt="Publisher"
          width={45}
          height={45}
        />

        <div className="flex flex-1 justify-between gap-5">
          <div className="flex-1">
            <h2 className="font-bold text-primary">{bounty?.name}</h2>
            <p className="text-sm text-slate-500">
              {bounty?.company?.name ?? bounty?.pointOfContact.name}
            </p>
            <p className="text-[10px] font-bold text-slate-500">
              {bounty?.status}
            </p>
          </div>

          <p className="flex max-w-24 items-center gap-2 text-base font-bold">
            <div className="aspect-square w-7 rounded-full bg-primary">
              <Image alt="solana" src="/usdc.png" width={30} height={30} />
            </div>
            {bounty?.compensation.amount}
          </p>
        </div>
      </article>

      {viewDetails && (
        <Details
          close={() => {
            setViewDetails(false);
          }}
          title={bounty?.name ?? ""}
          details={bounty?.description ?? ""}
          publisher={bounty?.company?.name ?? bounty?.pointOfContact.name ?? ""}
          pay={bounty?.compensation.amount ?? 0}
          bountyId={bounty?.id ?? ""}
          userId={session?.user.id ?? ""}
        />
      )}
    </div>
  );
};
