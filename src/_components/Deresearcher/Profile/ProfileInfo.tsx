import React from "react";
import { Copy } from "lucide-react";
import P from "../P";
import H3 from "../H3";

interface ProfileInfoProps {
  name: string;
  username: string;
  walletAddress: string;
  bio: string;
  stats: {
    papers: number;
    reviewedPapers: number;
    reputation: number;
  };
}

// Format large numbers with 'k' for thousands
const formatNumber = (num: number): string => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
};

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  username,
  walletAddress,
  bio,
  stats,
}) => {
  return (
    <div className="mb-8 text-center">
      <H3 className="mb-1 font-bold">{name}</H3>
      <P className="mb-2 text-sm text-zinc-500">{username}</P>
      <div className="mb-4 flex items-center justify-center">
        <span className="mr-2 text-sm text-primary">{walletAddress}</span>
        <Copy className="h-4 w-4 cursor-pointer text-zinc-400" />
      </div>
      <P className="mx-auto mb-6 max-w-2xl text-sm">{bio}</P>
      <div className="mb-6 flex justify-center space-x-12">
        <div className="text-center">
          <P className="text-2xl font-bold">{formatNumber(stats.papers)}</P>
          <P className="text-sm text-zinc-500">Papers</P>
        </div>
        <div className="text-center">
          <P className="text-2xl font-bold">
            {formatNumber(stats.reviewedPapers)}
          </P>
          <P className="text-sm text-zinc-500">Reviewed Papers</P>
        </div>
        <div className="text-center">
          <P className="text-2xl font-bold">{formatNumber(stats.reputation)}</P>
          <P className="text-sm text-zinc-500">Reputation</P>
        </div>
      </div>
    </div>
  );
};
