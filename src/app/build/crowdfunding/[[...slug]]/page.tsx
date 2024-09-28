import PaperContentComponent from "~/_components/final/Paper/PaperContent";
import { notFound } from "next/navigation";
import { Paper, PaperSchema } from "~/lib/validation";

import papers from "~/constants/dummyPapers.json";
import CampaignContentComponent from "~/_components/final/Campaign/content";

const getCampaign = async (campaignId: string) => {
  return {
    id: "asdfj;er9sadf",
    title: "This is a test campaign",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
    goal: 100,
    current: 100,
    ends: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    creatorId: "test",
    creator: {
      id: "person",
      name: "Jack Sturtevant",
      username: "person",
      email: "person",
      emailVerified: new Date(),
      bio: "person",
      image: "person",
      isVerified: true,
      hasFailedVerification: false,
      isAdmin: false,
      roles: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      links: [],
      domains: [],
      wallets: [],
      flicks: [],
    },
    backers: [
      {
        id: "test1",
        amount: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        message: "This is great. I can't wait to see the results.",
        campaignId: "test",
        campaign: {
          id: "test",
        },
        userId: "person2",
        user: {
          id: "person2",
          name: "Levon B",
          username: "brgndy",
          email: "person",
          emailVerified: new Date(),
          bio: "person",
          image: "person",
          isVerified: true,
          hasFailedVerification: false,
          isAdmin: false,
          roles: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          links: [],
          domains: [],
          wallets: [],
          flicks: [],
        },
      },
    ],
  };
};

export default async function PaperContentPage({
  params,
}: {
  params: { campaign_id: string };
}) {
  const campaignId = params.campaign_id;
  const campaign = await getCampaign(campaignId);

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <CampaignContentComponent campaign={campaign} />
    </div>
  );
}
