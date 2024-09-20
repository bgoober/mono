"use client";
import H1 from "~/_components/H1";
import P from "~/_components/P";
import { PeerReviewPapers } from "~/_components/PeerReview/PeerReviewPapers";
import { minimizePubkey } from "~/lib/utils/helpers";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/_components/ui/tooltip";
import { useWallet } from "@solana/wallet-adapter-react";

const PeerReview = () => {
  const { publicKey } = useWallet();
  return (
    <div className="mx-auto my-10 flex max-w-5xl flex-col gap-[10px] gap-[20px] space-y-10 px-3">
      <div className="flex w-full flex-row justify-between">
        <H1>Peer Review</H1>

        <Tooltip>
          <TooltipTrigger>
            <P className="font-bold">
              Reviewer : {publicKey ? minimizePubkey(publicKey.toBase58()) : ""}
            </P>
          </TooltipTrigger>
          <TooltipContent className="rounded-md bg-gray-900 p-3 text-white">
            {publicKey ? publicKey.toBase58() : ""}
          </TooltipContent>
        </Tooltip>
      </div>
      <PeerReviewPapers />
    </div>
  );
};

export default PeerReview;
