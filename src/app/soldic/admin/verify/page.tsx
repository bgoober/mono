import styles from "~/styles/table.module.css";
import { VerifyContent } from "~/content/verify";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";

async function Verify() {
  // table data
  const verificationRequests = await api.verificationRequest.read();
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <NavBar session={session} />
      <VerifyContent verificationRequests={verificationRequests} />
    </div>
  );
}

export default Verify;
