import styles from "~/styles/table.module.css";
import { api } from "~/trpc/react";

import { getServerAuthSession } from "~/server/auth";
import { CrownfundingContent } from "~/content/build/content";

async function Campaigns() {
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <div className="container mx-auto px-4 py-8">
        <CrownfundingContent session={session} />
      </div>
    </div>
  );
}

export default Campaigns;
