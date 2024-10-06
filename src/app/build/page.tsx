import styles from "~/styles/table.module.css";
import { api } from "~/trpc/react";

import { getServerAuthSession } from "~/server/auth";
import { CrownfundingContent } from "~/content/build/content";

async function Campaigns() {
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <CrownfundingContent session={session} />
    </div>
  );
}

export default Campaigns;
