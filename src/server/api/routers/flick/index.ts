import { read } from "./read";
import { createTRPCRouter } from "~/server/api/trpc";
import { create, createResponse } from "./create";
import { likeFlick, saveFlick } from "./update";
import { unlikeFlick, unsaveFlick } from "./delete";

export const flickRouter = createTRPCRouter({
  read,
  create,
  createResponse,
  saveFlick,
  unsaveFlick,
  likeFlick,
  unlikeFlick,
});
