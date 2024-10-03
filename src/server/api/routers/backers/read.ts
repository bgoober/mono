import { publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const getBackers = publicProcedure
  .input(z.object({
    campaignId: z.string(),
  }))
  .query(({ ctx, input }) => {
    const { campaignId } = input;
    return ctx.db.backer.findMany({
      where: { campaignId },
    });
  });

export const getBacker = publicProcedure
  .input(z.object({
    id: z.string(),
  }))
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.db.backer.findUnique({
      where: { id },
    });
  });