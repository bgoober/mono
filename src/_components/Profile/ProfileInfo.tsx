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
    <div className="text-center mb-8">
      <H3 className="font-bold mb-1">{name}</H3>
      <P className="text-sm text-zinc-500 mb-2">{username}</P>
      <div className="flex justify-center items-center mb-4">
        <span className="text-sm text-primary mr-2">{walletAddress}</span>
        <Copy className="h-4 w-4 text-zinc-400 cursor-pointer" />
      </div>
      <P className="text-sm max-w-2xl mx-auto mb-6">{bio}</P>
      <div className="flex justify-center space-x-12 mb-6">
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
