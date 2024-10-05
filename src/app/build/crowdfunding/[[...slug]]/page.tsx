import CampaignContentComponent from "~/_components/final/Campaign/content";
import { api } from "~/trpc/react";

async function Campaign({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const { data: campaign, isLoading } = api.campaign.getOne.useQuery({ id });
  if (isLoading) return <div>Loading...</div>;
  if (!campaign) return <div>No campaign found</div>;

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <CampaignContentComponent campaign={campaign} />
    </div>
  );
}

export default Campaign;
