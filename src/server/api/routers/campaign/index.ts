import { createTRPCRouter } from "~/server/api/trpc";
import { createCampaign } from "./create";
import { getCampaigns, getCampaign, searchCampaigns } from "./read";
import { updateCampaign } from "./update";

export const campaignRouter = createTRPCRouter({
  create: createCampaign,
  getAll: getCampaigns,
  getOne: getCampaign,
  search: searchCampaigns,
  update: updateCampaign,
});