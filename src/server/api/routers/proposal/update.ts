import { protectedProcedure } from "~/server/api/trpc";

import { z } from "zod";
import { ProposalStatus } from "@prisma/client";
export const updateStatus = protectedProcedure
  .input(
    z.object({
      id: z.number(),
      status: z.nativeEnum(ProposalStatus),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { id, status } = input;
    const proposal = await ctx.db.proposal.findUnique({ where: { id } });
    if (!proposal) {
      throw new Error("Proposal not found");
    }
    return await ctx.db.proposal.update({ where: { id }, data: { status } });
  });
