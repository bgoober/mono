import { publicProcedure } from "~/server/api/trpc";
import { type UnwrapArray, type UnwrapPromise } from "~/utils";
import { z } from "zod";
export const read = publicProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
  return ctx.db.proposal.findUnique({
    where: {
      id: input.id,
    },
    include: {
      creator: true,
      DAO: true,
      votes: true,
    },
  });
});
export type Proposal = UnwrapPromise<ReturnType<typeof read>>;