
import { createProposal } from "~/server/api/routers/proposal/create";
import { read } from "~/server/api/routers/proposal/read";
import { updateStatus } from "~/server/api/routers/proposal/update";
import { createTRPCRouter } from "~/server/api/trpc";

export const proposalRouter = createTRPCRouter({
  create: createProposal,
  read: read,
  updateStatus: updateStatus,
});
