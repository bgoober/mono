"use client";

import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { BOUNTY_STATUS, PAPER_STATUS } from "~/lib/utils/constants";
import { useRouter } from "next/navigation";

export type ColumnDefinition = {
  key: string;
  header: string;
  sortable?: boolean;
};

type TableProps = {
  columns: ColumnDefinition[];
  data: any[];
  marginTop?: string;
  onRowClick: (item: any) => void;
};

type SortConfig = {
  key: string;
  direction: "asc" | "desc";
} | null;

const getColumnVisibility = (columnKey: string) => {
  switch (columnKey) {
    case "title":
    case "minted": // Make "minted" always visible
      return "";
    case "status":
      return "table-cell";
    case "createdDate":
      return "hidden md:table-cell";
    default:
      return "hidden lg:table-cell";
  }
};

const TableHeader: React.FC<{
  columns: ColumnDefinition[];
  onSort: (key: string) => void;
  sortConfig: SortConfig;
}> = ({ columns, onSort, sortConfig }) => (
  <thead className="bg-gradient-to-r from-zinc-100/50 to-violet-200/50">
    <tr>
      {columns.map((column) => (
        <th
          key={column.key}
          scope="col"
          className={`px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-700 ${getColumnVisibility(
            column.key,
          )} ${column.sortable ? "cursor-pointer select-none" : ""}`}
          onClick={() => column.sortable && onSort(column.key)}
        >
          <div className="flex items-center">
            {column.header}
            {column.sortable && (
              <span className="ml-2">
                {sortConfig?.key === column.key ? (
                  sortConfig.direction === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                )}
              </span>
            )}
          </div>
        </th>
      ))}
    </tr>
  </thead>
);

const TableRow: React.FC<{
  item: any;
  columns: ColumnDefinition[];
  onRowClick: (item: any) => void;
}> = ({ item, columns, onRowClick }) => (
  <tr
    className="cursor-pointer hover:bg-zinc-50"
    onClick={() => onRowClick(item)}
  >
    {columns.map((column) => (
      <td
        key={column.key}
        className={`whitespace-nowrap px-6 py-4 ${getColumnVisibility(
          column.key,
        )}`}
      >
        {column.key === "status" ? (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              item.status === PAPER_STATUS.APPROVED ||
              item.status === BOUNTY_STATUS.OPEN
                ? "bg-secondary-foreground text-secondary"
                : item.status === PAPER_STATUS.PEER_REVIEWING ||
                    item.status === BOUNTY_STATUS.IN_PROGRESS
                  ? "bg-primary-foreground text-primary"
                  : item.status === PAPER_STATUS.PUBLISHED ||
                      item.status === BOUNTY_STATUS.COMPLETED
                    ? "bg-accent text-accent-foreground"
                    : "bg-destructive-foreground text-destructive"
            }`}
          >
            {item.status}
          </span>
        ) : (
          <span className="whitespace-normal text-pretty break-words text-sm text-zinc-600">
            {item[column.key]}
          </span>
        )}
      </td>
    ))}
  </tr>
);

export default function Table({
  columns,
  data,
  marginTop = "mt-8",
  onRowClick,
}: TableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "createdDate",
    direction: "desc",
  });
  const router = useRouter();

  const sortedData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.error("Data provided to Table is not an array");
      return [];
    }

    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (sortConfig.key === "createdDate") {
          return sortConfig.direction === "asc"
            ? new Date(a.createdDate).getTime() -
                new Date(b.createdDate).getTime()
            : new Date(b.createdDate).getTime() -
                new Date(a.createdDate).getTime();
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    setSortConfig((currentConfig) => {
      if (currentConfig?.key === key) {
        return {
          key,
          direction: currentConfig.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "desc" };
    });
  };

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={`flex flex-col ${marginTop}`}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-zinc-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-zinc-200">
              <TableHeader
                columns={columns}
                onSort={requestSort}
                sortConfig={sortConfig}
              />
              <tbody className="divide-y divide-zinc-200 text-pretty bg-white">
                {sortedData.map((item, index) => (
                  <TableRow
                    key={item.id || index}
                    item={item}
                    columns={columns}
                    onRowClick={onRowClick}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
