import { createBounty, createApplication } from "~/server/api/routers/bounty/create";
import { readAllApplications, readAllBounties, readBounty } from "~/server/api/routers/bounty/read";
import { createTRPCRouter } from "~/server/api/trpc";

export const bountyRouter = createTRPCRouter({
  createBounty,
  createApplication,
  readAllApplications,
  readAllBounties,
  readBounty
})