import CampaignContentComponent from "~/_components/final/Campaign/content";
import { api } from "~/trpc/react";

async function Campaign() {
  const { data: campaign, isLoading } = api.campaign.getById.useQuery();
  if (isLoading) return <div>Loading...</div>;
  if (!campaign) return <div>No campaign found</div>;

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <CampaignContentComponent campaign={Campaign} />
    </div>
  );
}

export default Campaign;
