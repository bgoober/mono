"use client";
import styles from "~/styles/table.module.css";
import { DataTable } from "~/_components/final/Table/crowdfunding";
import {
  type EntrySearchResult,
  type Entry,
} from "~/server/api/routers/entry/read";
import { type ColumnDef } from "@tanstack/react-table";
import Modal from "~/_components/soldic/Modal";
import { type Dispatch, type SetStateAction, useState, useEffect } from "react";
import { CreateEntry } from "~/_components/soldic/create-entry";
import { type Session } from "next-auth";
import { api } from "~/trpc/react";
import { cn, getContrastedHexColor } from "~/utils";
import { type ExternalLink } from "~/types";
import { useRouter } from "next/navigation";
import { type Tag } from "~/server/api/routers/tag/read";
import { Button } from "~/_components/final/ui/button";
import { Input } from "~/_components/final/ui/input";
import { Label } from "~/_components/final/ui/label";
import { Textarea } from "~/_components/final/ui/textarea";
import H1 from "~/_components/final/H1";
import { Campaign } from "~/server/api/routers/campaign/read";

const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
        {row.original.title}
      </span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {row.original.description}
        </span>
      </span>
    ),
  },
  {
    accessorKey: "goal",
    header: "Goal",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {row.original.goal}
        </span>
      </span>
    ),
  },
  {
    accessorKey: "current",
    header: "Current",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        {row.original.current}
      </span>
    ),
  },
  {
    accessorKey: "ends",
    header: "Ends",
    cell: ({ row }) => (
      <span key="term" className={`whitespace-nowrap`}>
        {row.original.ends.toLocaleDateString()}
      </span>
    ),
  },
];

function CrownfundingContent({
  campaigns,
  session,
}: {
  campaigns: Campaign[] | undefined;
  session: Session | null;
}) {
  const [showOnlyHidden, setShowOnlyHidden] = useState(false);
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [showCreateEntryModal, setShowCreateEntryModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [requestButtonHovered, setRequestButtonHovered] = useState(false);
  const [searchResults, setSearchResults] = useState<Campaign[]>([]);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const createNewEntryRequest = api.entry.requestDefinition.useMutation();
  const router = useRouter();
  useEffect(() => {
    const results =
      searchTerm === ""
        ? campaigns
        : campaigns?.filter((campaign) =>
            campaign.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
    setSearchResults(results ?? []);
  }, [searchTerm, campaigns]);

  return (
    <div className={styles.content}>
      <H1>Crowdfunding</H1>
      <div className={styles.innerContent}>
        <div className="mb-4 flex gap-2">
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-solid border-black p-4 text-black"
          />
          {
            <div
              onMouseEnter={() => setRequestButtonHovered(true)}
              onMouseLeave={() => setRequestButtonHovered(false)}
              className="relative flex flex-grow"
            >
              <Button
                onClick={() => router.push("/build/crowdfunding/new")}
                className={cn(
                  "w-fit whitespace-nowrap rounded-md border border-green-600 bg-green-600 p-2",
                )}
              >
                + New Campaign
              </Button>
            </div>
          }
        </div>

        {campaigns && (
          <DataTable
            columns={columns}
            data={searchResults}
            onRowClick={(entry) => {
              setShowEntryModal(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export { CrownfundingContent };
