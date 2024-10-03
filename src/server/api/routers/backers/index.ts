import { createTRPCRouter } from "~/server/api/trpc";
import { createBacker } from "./create";
import { getBackers, getBacker } from "./read";
import { updateBacker } from "./update";

export const campaignRouter = createTRPCRouter({
  create: createBacker,
  getAll: getBackers,
  getOne: getBacker,
  update: updateBacker,
});