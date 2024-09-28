"use client";
import styles from "~/styles/table.module.css";
import { DataTable } from "~/_components/soldic/tables/DataTable";
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

const columns: ColumnDef<Entry>[] = [
  {
    accessorKey: "term",
    header: "Term",
    cell: ({ row }) => (
      <td key="term" className={`whitespace-nowrap`}>
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {`${row.original.term} ${
            row.original.acronym ? `(${row.original.acronym})` : ""
          }`}
        </span>
      </td>
    ),
  },
  {
    accessorKey: "definition",
    header: "Definition",
    cell: ({ row }) => (
      <td key="definition" className={`whitespace-nowrap`}>
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {row.getValue("definition")}
        </span>
      </td>
    ),
  },
  {
    accessorKey: "peerReviewCount",
    header: "Reviews",
    cell: ({ row }) => (
      <td key="term" className={`whitespace-nowrap`}>
        <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
          {
            row.original.userEntries.filter(
              (userEntry) => userEntry.hasReviewed,
            ).length
          }
        </span>
      </td>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => (
      <td key="term" className={`whitespace-nowrap`}>
        {row.original.tags.map((tag) => (
          <span className="inline-flex rounded-full bg-secondary-foreground px-2 text-xs font-semibold leading-5 text-secondary">
            {tag.tag.name}
          </span>
        ))}
      </td>
    ),
  },
];

function CreateEntryModal({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modal setShowModal={setShowModal}>
      <CreateEntry />
    </Modal>
  );
}

export function EntryModalStaticContent({ entry }: { entry: Entry }) {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">{entry.term}</h1>
      <p className="mb-4">{entry.longDefinition}</p>
      {entry.links && (entry.links as ExternalLink[]).length > 0 && (
        <div className="flex flex-col gap-2">
          <div>links:</div>
          {(entry.links as ExternalLink[]).map((link) => (
            <a href={link.url} key={link.url} className="text-blue-500">
              {link.title}
            </a>
          ))}
        </div>
      )}
      <div className="mt-4 flex gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag.tag.id}
            className="inline-flex rounded-full bg-secondary-foreground px-2 text-xs font-semibold leading-5 text-secondary"
            style={{ borderColor: tag.tag.color }}
          >
            {tag.tag.name}
          </span>
        ))}
      </div>
    </>
  );
}

function EntryModalEditContent({
  entry,
  setEditing,
}: {
  entry: Entry;
  setEditing: Dispatch<SetStateAction<boolean>>;
}) {
  const [editingTerm, setEditingTerm] = useState(entry.term);
  const [editingDefinition, setEditingDefinition] = useState(entry.definition);
  const [editingLongDefinition, setEditingLongDefinition] = useState(
    entry.longDefinition ?? "",
  );
  const [editingLinks, setEditingLinks] = useState(
    entry.links as ExternalLink[],
  );
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>(entry.tags.map((tag) => tag.tag));
  const [relations, setRelations] = useState<EntrySearchResult[]>(
    entry.relatedTo.map((relation) => relation.entryB),
  );
  const [hidden, setHidden] = useState(entry.hidden);

  const [tagSearchTerm, setTagSearchTerm] = useState("");
  const [entrySearchTerm, setEntrySearchTerm] = useState("");
  const { data: tagSearchResults } = api.tag.search.useQuery(
    { query: tagSearchTerm },
    {
      enabled: !!tagSearchTerm,
    },
  );

  const { data: entrySearchResults } = api.entry.search.useQuery(
    { query: entrySearchTerm },
    {
      enabled: !!entrySearchTerm,
    },
  );

  const createTag = api.tag.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const createEntryRevision = api.entryRevision.create.useMutation({
    onSuccess: () => {
      setEditing(false);
    },
  });
  const createEntryComponent = (entry: Entry) => {
    return (
      <div
        className={cn("flex justify-between", `border-1 border-solid`)}
        key={entry.id}
      >
        {entry.term}{" "}
        <Button
          onClick={(e) => {
            e.preventDefault();
            setRelations([...relations, entry]);
            setEntrySearchTerm("");
          }}
        >
          Add
        </Button>
      </div>
    );
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createEntryRevision.mutate({
          id: entry.id,
          term: editingTerm,
          definition: editingDefinition,
          links: editingLinks,
          tags: tags.map((tag) => tag.id),
          longDefinition: editingLongDefinition,
          relations: relations.map((relation) => relation.id),
        });
      }}
      className="flex flex-col gap-6"
    >
      <Label>Term</Label>
      <Input
        type="text"
        placeholder="Title"
        value={editingTerm}
        onChange={(e) => setEditingTerm(e.target.value)}
        className={cn(
          "border-zinc-200 text-sm text-zinc-700",
          "focus:border-primary focus:ring-2 focus:ring-primary",
          "tracking-wide transition-all duration-200",
        )}
      />
      <label className="flex items-center gap-2">
        <Input
          type="checkbox"
          className="flex w-fit"
          checked={hidden}
          onChange={(e) => setHidden(e.target.checked)}
        />
        Hidden
      </label>
      <Label>Short Definition</Label>
      <Textarea
        placeholder="Definition"
        value={editingDefinition}
        onChange={(e) => setEditingDefinition(e.target.value)}
        className={cn(
          "border-zinc-200 text-sm text-zinc-700",
          "focus:border-primary focus:ring-2 focus:ring-primary",
          "tracking-wide transition-all duration-200",
        )}
      />
      <Label>Long Definition</Label>
      <Textarea
        placeholder="Long Definition"
        value={editingLongDefinition}
        onChange={(e) => setEditingLongDefinition(e.target.value)}
        className={cn(
          "border-zinc-200 text-sm text-zinc-700",
          "focus:border-primary focus:ring-2 focus:ring-primary",
          "tracking-wide transition-all duration-200",
        )}
      />
      <div className="flex flex-col gap-2">
        Links
        <Button
          onClick={(e) => {
            e.preventDefault();
            setEditingLinks([...editingLinks, { url: "", title: "" }]);
          }}
        >
          Add Link
        </Button>
        {editingLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e) => {
                const newLinks = [...editingLinks];
                console.log("hello");
                if (newLinks && !!newLinks[index]?.url) {
                  newLinks[index].url = e.target.value;
                }
                setEditingLinks(newLinks);
              }}
            />
            <Input
              type="text"
              placeholder="Title"
              value={link.title}
              onChange={(e) => {
                const newLinks = [...editingLinks];
                if (newLinks && !!newLinks[index]) {
                  newLinks[index].title = e.target.value;
                }
                setEditingLinks(newLinks);
              }}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                setEditingLinks(editingLinks.filter((_, i) => i !== index));
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1>Tags</h1>
        <div className="flex flex-row gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag.id}
              className="inline-flex rounded-full bg-secondary-foreground px-2 text-xs font-semibold leading-5 text-secondary"
              style={{ borderColor: tag.color }}
            >
              {tag.name}
              <button
                className="ml-2 rounded-full bg-red-600 px-2 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setTags(tags.filter((_, i) => i !== index));
                }}
              >
                -
              </button>
            </span>
          ))}
        </div>
        {tagSearchTerm &&
          !tagSearchResults?.some((tag) => tag.name === tagSearchTerm) && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                createTag.mutate(
                  { name: tagSearchTerm, color: getContrastedHexColor() },
                  {
                    onSuccess: (tag) => {
                      setTagSearchTerm("");
                      setTags([...tags, tag as unknown as Tag]);
                    },
                  },
                );
              }}
              disabled={
                !tagSearchTerm ||
                tagSearchResults?.some((tag) => tag.name === tagSearchTerm)
              }
            >
              Create Tag &quot;{tagSearchTerm}&quot;
            </Button>
          )}
        <Input
          type="text"
          placeholder="Tag Search"
          value={tagSearchTerm}
          onChange={(e) => setTagSearchTerm(e.target.value)}
          className={cn(
            "border-zinc-200 text-sm text-zinc-700",
            "focus:border-primary focus:ring-2 focus:ring-primary",
            "tracking-wide transition-all duration-200",
          )}
        />
        {tagSearchResults?.map((tag) => (
          <span
            className="inline-flex rounded-full bg-secondary-foreground px-2 text-xs font-semibold leading-5 text-secondary"
            key={tag.id}
          >
            {tag.name}{" "}
            <Button
              onClick={(e) => {
                e.preventDefault();
                setTags([...tags, tag as unknown as Tag]);
                setTagSearchTerm("");
              }}
            >
              Add
            </Button>
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h1>Related Terms</h1>
        <div className="flex flex-col gap-2">
          {relations.map((relation, index) => (
            <div
              key={relation.id}
              className="inline-flex rounded-full bg-secondary-foreground px-2 text-xs font-semibold leading-5 text-secondary"
            >
              {relation.term}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRelations(relations.filter((_, i) => i !== index));
                }}
                className="ml-2 rounded-full bg-red-600 px-2 text-white"
              >
                -
              </button>
            </div>
          ))}
        </div>
        <Input
          type="text"
          placeholder="Search Related Terms"
          value={entrySearchTerm}
          onChange={(e) => setEntrySearchTerm(e.target.value)}
          className={cn(
            "border-zinc-200 text-sm text-zinc-700",
            "focus:border-primary focus:ring-2 focus:ring-primary",
            "tracking-wide transition-all duration-200",
          )}
        />
        {/* @ts-expect-error: This error is irrelevant and wrong */}
        {entrySearchResults?.map((entry) => createEntryComponent(entry))}
      </div>
      <Button
        type="submit"
        className="bg-green-500"
        disabled={
          createEntryRevision.isPending ||
          !editingTerm ||
          !editingDefinition ||
          !editingLongDefinition
        }
      >
        {createEntryRevision.isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

function EntryModal({
  entry,
  setShowModal,
  session,
}: {
  entry: Entry;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  session: Session | null;
}) {
  const [editing, setEditing] = useState(false);

  const updateEntry = api.entry.peerReview.useMutation();
  const userHasPeerReviewed = entry.userEntries.some(
    (userEntry) =>
      userEntry.userId === session?.user.id && userEntry.hasReviewed,
  );

  return (
    <Modal setShowModal={setShowModal}>
      {!editing ? (
        <EntryModalStaticContent entry={entry} />
      ) : (
        <EntryModalEditContent entry={entry} setEditing={setEditing} />
      )}
      {session?.user?.isVerified && (
        <div className="mt-4 flex gap-2">
          <Button
            className="rounded-md border border-black p-2"
            onClick={() => setEditing(!editing)}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>
          <Button
            className={cn(
              "rounded-md border p-2",
              userHasPeerReviewed ? "border-red-500" : "border-green-500",
            )}
            onClick={() => {
              updateEntry.mutate({
                id: entry.id,
                hasBeenPeerReviewed: !userHasPeerReviewed,
              });
            }}
          >
            {userHasPeerReviewed ? "Revoke Review" : "Add Review"}
          </Button>
        </div>
      )}
    </Modal>
  );
}

function VerificationRequestModal({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const createVerificationRequest =
    api.verificationRequest.create.useMutation();
  const [details, setDetails] = useState("");
  return (
    <Modal setShowModal={setShowModal}>
      <h1 className="mb-4 text-2xl font-bold">Request Verification</h1>
      <p className="mb-4">
        Please explain your qualifications/expertise in Solana
      </p>
      <Input
        type="text"
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="mb-4 w-full rounded-md border border-solid border-black p-4 text-black"
      />
      <div className="mt-4 flex gap-2">
        <Button
          className={cn("rounded-md border p-2", "border-green-500")}
          onClick={() => {
            createVerificationRequest.mutate({
              details,
            });
          }}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}

function EntryContent({
  entries,
  session,
}: {
  entries: Entry[] | undefined;
  session: Session | null;
}) {
  const [showOnlyHidden, setShowOnlyHidden] = useState(false);
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [showCreateEntryModal, setShowCreateEntryModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [requestButtonHovered, setRequestButtonHovered] = useState(false);
  const [searchResults, setSearchResults] = useState<Entry[]>([]);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const createNewEntryRequest = api.entry.requestDefinition.useMutation();

  useEffect(() => {
    const results = entries?.filter((entry) =>
      entry.term.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results ?? []);
  }, [searchTerm, entries]);

  return (
    <div className={styles.content}>
      <H1>Solana Dictionary</H1>
      <div className={styles.innerContent}>
        <div className="mb-4 flex gap-2">
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-solid border-black p-4 text-black"
          />
          {searchResults.length === 0 && (
            <div
              onMouseEnter={() => setRequestButtonHovered(true)}
              onMouseLeave={() => setRequestButtonHovered(false)}
              className="relative flex flex-grow"
            >
              <Button
                onClick={() =>
                  createNewEntryRequest.mutate({
                    term: searchTerm,
                  })
                }
                disabled={!session?.user}
                className={cn(
                  "w-fit whitespace-nowrap rounded-md border border-green-500 p-2",
                  !session?.user &&
                    "cursor-not-allowed border-gray-500 opacity-50",
                )}
              >
                + Request Definition
              </Button>
              {requestButtonHovered && !session?.user && (
                <p className="absolute left-0 top-16 flex w-[100%] items-center justify-center rounded-md border border-red-500 bg-white p-2 text-lg text-red-500">
                  Please log in first
                </p>
              )}
            </div>
          )}
        </div>
        {session?.user && (
          <div className="mb-4 flex items-center gap-2">
            <Button onClick={() => setShowCreateEntryModal(true)}>
              + Create New Entry
            </Button>
            {!session?.user?.isVerified && (
              <Button onClick={() => setShowVerifyModal(true)}>
                Request Verification
              </Button>
            )}
            {
              <label className="ml-2 flex items-center gap-2">
                <Input
                  type="checkbox"
                  checked={showOnlyHidden}
                  onChange={(e) => setShowOnlyHidden(e.target.checked)}
                  className="w-fit"
                />
                Show Hidden
              </label>
            }
          </div>
        )}

        {entries && (
          <DataTable
            columns={columns}
            data={searchResults.filter((entry) =>
              showOnlyHidden ? entry.hidden : !entry.hidden,
            )}
            onRowClick={(entry) => {
              setSelectedEntry(entry);
              setShowEntryModal(true);
            }}
          />
        )}
        {showEntryModal && selectedEntry && (
          <EntryModal
            entry={selectedEntry}
            setShowModal={setShowEntryModal}
            session={session}
          />
        )}

        {showCreateEntryModal && (
          <CreateEntryModal setShowModal={setShowCreateEntryModal} />
        )}
        {showVerifyModal && (
          <VerificationRequestModal setShowModal={setShowVerifyModal} />
        )}
      </div>
    </div>
  );
}

export { EntryContent };
