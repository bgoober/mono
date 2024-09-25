"use client";
import styles from "~/styles/table.module.css";
import { DataTable } from "~/_components/soldic/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { api } from "~/trpc/react";
import { type VerificationRequest } from "~/server/api/routers/verificationRequests/read";

const columns: ColumnDef<VerificationRequest>[] = [
  {
    accessorKey: "user.name",
    header: "Name",
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => <div>{row.getValue("details")}</div>,
  },
  {
    accessorKey: "approve",
    header: "Approve",
    cell: ({ row }) => {
      console.log("row", row.getValue("id"));
      const processVerificationRequest =
        api.verificationRequest.processVerificationRequest.useMutation();

      return (
        <button
          onClick={() => {
            processVerificationRequest.mutate({
              id: row.original.id,
              isApproval: true,
            });
          }}
        >
          Approve
        </button>
      );
    },
  },
  {
    accessorKey: "reject",
    header: "Reject",
    cell: ({ row }) => {
      const processVerificationRequest =
        api.verificationRequest.processVerificationRequest.useMutation();

      return (
        <button
          onClick={() => {
            processVerificationRequest.mutate({
              id: row.original.id,
              isApproval: false,
            });
          }}
        >
          Reject
        </button>
      );
    },
  },
];

function VerifyContent({
  verificationRequests,
}: {
  verificationRequests: VerificationRequest[] | undefined;
}) {
  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        {verificationRequests && (
          <DataTable columns={columns} data={verificationRequests} />
        )}
      </div>
    </div>
  );
}

export { VerifyContent };
