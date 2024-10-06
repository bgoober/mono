import styles from "~/styles/table.module.css";
import { SentenceParserContent } from "~/content/sentenceParser/content";
import { api } from "~/trpc/react";

import { getServerAuthSession } from "~/server/auth";
import NavBar from "~/_components/soldic/NavBar";

async function SentenceParser() {
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <NavBar session={session} />
      <SentenceParserContent />
    </div>
  );
}

export default SentenceParser;
