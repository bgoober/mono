"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "~/trpc/react";
import { CrownfundingContent } from "~/content/build/content";
import styles from "~/styles/table.module.css";
import type { Session } from "next-auth";

// Client component for fetching and display campaigns to solve the runtime error
// Error: Cannot access campaign.getOne on the server.

const ClientCampaigns = ({ session }: { session: Session }) => {
  const { data: campaigns, isLoading } = api.campaign.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!campaigns) return <div>No campaigns found</div>;

  return (
    <div className={styles.main}>
      <CrownfundingContent campaigns={campaigns} session={session} />
    </div>
  );
};

export default ClientCampaigns;
