import styles from "~/styles/table.module.css";
import { EntryContent } from "~/content/entry/content";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";
import campaignsJSON from "~/constants/campaigns.json";
import { type Campaign } from "~/server/api/routers/campaign/read";
import { CrownfundingContent } from "~/content/build/content";
async function Campaigns() {
  // table data
  const campaigns = (campaignsJSON as any).map((campaign: any) => ({
    ...campaign,
    ends: new Date(campaign.ends),
  })) as Campaign[];
  const session = await getServerAuthSession();
  console.log(campaigns);

  return (
    <div className={styles.main}>
      {/* <NavBar session={session} /> */}
      <CrownfundingContent campaigns={campaigns} session={session} />
    </div>
  );
}

export default Campaigns;
