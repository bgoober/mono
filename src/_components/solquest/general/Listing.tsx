"use client";
import React from "react";
import Image from "next/image";
import Details from "./Details";
import { useState } from "react";

export const Listing: React.FC<{
  src?: string;
  title: string;
  details: string;
  publisher: string;
  pay: number;
}> = ({ src, title, details, publisher, pay }) => {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <>
      <article
        onClick={() => {
          setViewDetails(true);
        }}
        className="my-4 flex items-center gap-3 p-3 transition-all hover:cursor-pointer hover:bg-slate-200"
      >
        <Image
          src={src ?? "/assets/solquest.svg"}
          alt="Publisher"
          width={45}
          height={45}
        />

        <div className="flex flex-1 justify-between gap-5">
          <div className="flex-1">
            <h2 className="font-bold text-primary">{title}</h2>
            <p className="text-sm text-slate-500">{publisher}</p>
            <p className="text-[10px] font-bold text-slate-500">Open</p>
          </div>

          <p className="flex max-w-24 items-center gap-2 text-base font-bold">
            <div className="aspect-square w-7 rounded-full bg-primary">
              <Image alt="solana" src="/solana-w.svg" width={30} height={30} />
            </div>
            {pay}
          </p>
        </div>
      </article>

      {viewDetails && (
        <Details
          close={() => {
            setViewDetails(false);
          }}
          title={title}
          details={details}
          publisher={publisher}
          pay={pay}
        />
      )}
    </>
  );
};
