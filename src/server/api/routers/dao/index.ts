
import { createDao } from "~/server/api/routers/dao/create";
import { read } from "~/server/api/routers/dao/read";
import { createTRPCRouter } from "~/server/api/trpc";

export const daoRouter = createTRPCRouter({
  create: createDao,
  read: read,
});
