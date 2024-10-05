import styles from "~/styles/table.module.css";
import { VerifyContent } from "~/content/verify";
import { api } from "~/trpc/react";

import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";

async function Verify() {
  // table data
  const verificationRequests = api.verificationRequest.read.useQuery();
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <NavBar session={session} />
      {/* <VerifyContent verificationRequests={verificationRequests} /> */}
    </div>
  );
}

export default Verify;
