export const PRIMARY_COLOR = "#2D3648";
export const PRIMARY_COLOR_DARK = "#040507";

export const PRIMARY_FILL = "#717D96";

interface ColumnDefinition {
    key: string;
    header: string;
    sortable?: boolean;
  }

  export const PAPER_STATUS = {
    PEER_REVIEWING: "peer_reviewing",
    APPROVED: "approved",
    PUBLISHED: "published",
    REQUEST_REVISION: "request_revision",
    MINTED: "minted",
  };

  export const BOUNTY_STATUS = {
    OPEN: "OPEN",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
  };

  export const APPLICANTS_STATUS = {
    ACCEPTED: "ACCEPTED",
    PENDING: "PENDING",
    REJECTED: "REJECTED"
  }

  export const COLUMNS: ColumnDefinition[] = [
    { key: "title", header: "Paper Title" },
    { key: "authors", header: "Authors" },
    { key: "createdDate", header: "Created Date", sortable: true },
    { key: "domains", header: "Domains" },
    { key: "status", header: "Status", sortable: true },
  ];

  export const BOUNTIES_COLUMNS: ColumnDefinition[] = [
    { key: "title", header: "Title" },
    { key: "publisher", header: "Publisher" },
    { key: "createdDate", header: "Created Date", sortable: true },
    { key: "pay", header: "Pay", sortable: true },
    { key: "status", header: "Status", sortable: true },
    { key: "track", header: "Track", sortable: true },
  ];

  export const APPLICANTS_COLUMNS: ColumnDefinition[] = [
    {key: "name", header: "Name"},
    {key: "createdAt", header: "Applied At", sortable: true},
    {key: "status", header: "Status", sortable: true}
  ]
