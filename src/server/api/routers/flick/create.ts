import { protectedProcedure } from "~/server/api/trpc";

import { z } from "zod";
export const create = protectedProcedure
  .input(
    z.object({
      description: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { description } = input;
    const { user } = ctx.session;
    const flick = await ctx.db.flick.create({
      data: {
        description,
        creatorId: user.id,
      },
    });
    return flick;
  });

export const createResponse = protectedProcedure
  .input(
    z.object({
      description: z.string(),
      parentId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { description, parentId } = input;
    const { user } = ctx.session;
    const flick = await ctx.db.flickResponse.create({
      data: {
        description,
        parentId,
        creatorId: user.id,
        title: "",
      },
    });
    return flick;
  });
