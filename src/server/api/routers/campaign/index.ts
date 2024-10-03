import { createTRPCRouter } from "~/server/api/trpc";
import { createCampaign, createBacker } from "./create";
import { getCampaigns, getCampaign, searchCampaigns } from "./read";
import { updateCampaign, updateBacker } from "./update";

export const campaignRouter = createTRPCRouter({
  create: createCampaign,
  createBacker: createBacker,
  getAll: getCampaigns,
  getOne: getCampaign,
  search: searchCampaigns,
  update: updateCampaign,
  updateBacker: updateBacker,
});