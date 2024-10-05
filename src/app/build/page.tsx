import styles from "~/styles/table.module.css";
import { EntryContent } from "~/content/entry/content";
import { api } from "~/trpc/react";

import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";
import campaignsJSON from "~/constants/campaigns.json";
import { type Campaign } from "~/server/api/routers/campaign/read";
import { CrownfundingContent } from "~/content/build/content";

async function Campaigns() {
  const { data: campaigns, isLoading } = api.campaign.getAll.useQuery();
  const session = await getServerAuthSession();

  if (isLoading) return <div>Loading...</div>;
  if (!campaigns) return <div>No campaigns found</div>;

  return (
    <div className={styles.main}>
      {/* <NavBar session={session} /> */}
      <CrownfundingContent campaigns={campaigns} session={session} />
    </div>
  );
}

export default Campaigns;
