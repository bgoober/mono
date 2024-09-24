import styles from "~/styles/table.module.css";
import { EntryContent } from "~/content/main/content";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";

async function Entries() {
  // table data
  const entries = await api.entry.read();
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <NavBar session={session} />
      <EntryContent entries={entries} session={session} />
    </div>
  );
}

export default Entries;
