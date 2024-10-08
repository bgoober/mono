"use client";

import { useState, useEffect } from "react";
import H4 from "../H4";
import P from "../P";
import H2 from "../H2";
import PeerReviewComponent from "../PeerReview";
import { AvatarWithName } from "../Avatar";
import { Lock } from "lucide-react";
import { Paper, Review } from "~/lib/validation";
import { formatTimeAgo } from "~/lib/utils/helpers";
import { PAPER_STATUS } from "~/lib/utils/constants";
import dynamic from "next/dynamic";
import PeerReviewEditor from "../PeerReview/PeerReviewEditor";
import PaperActionButton from "../Paper/PaperActionButton";
import useScreen from "~/hooks/useScreen";
import { Backer, Campaign } from "~/server/api/routers/campaign/read";
import BackerComponent from "~/_components/final/Campaign/backer";
import PledgeForm from "~/_components/final/Campaign/pledge";

export default function CampaignContentComponent({
  campaign,
}: {
  campaign: Campaign;
}) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const renderBackers = () => {
    if (campaign.backers.length === 0) {
      return <P className="text-zinc-500">No backers yet.</P>;
    }

    return campaign.backers.map((backer: Backer) => (
      <BackerComponent
        key={backer.id}
        backer={{
          ...backer,
          time: formatTimeAgo(backer.createdAt.toISOString()),
        }}
      />
    ));
  };

  return (
    <div className="mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <H2 className="mb-4 text-pretty font-semibold text-zinc-700">
            {campaign.title}
          </H2>
          <P className="mb-4 text-pretty font-light">{campaign.description}</P>
          <div className="mb-4 flex items-center space-x-1">
            <AvatarWithName name={campaign.creator.name ?? ""} />
            <P className="text-pretty text-sm text-zinc-600">
              {campaign.creator.name} •{" "}
              {formatTimeAgo(campaign.createdAt.toISOString())}
            </P>
          </div>
          <PledgeForm campaign={campaign} />
        </div>

        <div className="mt-20 flex flex-col">
          <H4 className="pt-24 font-atkinson font-semibold">Backers</H4>
          {renderBackers()}
        </div>
      </div>
      <PeerReviewEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
      />
    </div>
  );
}
