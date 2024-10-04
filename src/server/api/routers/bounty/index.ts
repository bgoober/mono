import { createBounty, createApplication, createToken } from "~/server/api/routers/bounty/create";
import { readAllApplications, readAllBounties, readBounty, readOwnedBounties, readWorkingBounties } from "~/server/api/routers/bounty/read";
import { acceptApplication, rejectApplication, startBounty, endBounty } from "~/server/api/routers/bounty/update";
import { createTRPCRouter } from "~/server/api/trpc";

export const bountyRouter = createTRPCRouter({
  createBounty,
  createApplication,
  createToken,
  readAllApplications,
  readAllBounties,
  readBounty,
  readOwnedBounties,
  readWorkingBounties,
  acceptApplication,
  rejectApplication,
  startBounty,
  endBounty
})