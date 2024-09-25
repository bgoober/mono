import { createPaper } from "~/server/api/routers/paper/create";
import { createTRPCRouter } from "~/server/api/trpc";

export const paperRouter = createTRPCRouter({
  create: createPaper,
});
