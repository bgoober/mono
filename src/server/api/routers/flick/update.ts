import { protectedProcedure } from "~/server/api/trpc";

import { z } from "zod";
export const likeFlick = protectedProcedure
  .input(
    z.object({
      flickId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { flickId } = input;
    const { user } = ctx.session;
    const flick = await ctx.db.flick.update({
      data: {
        likedBy: {
          connect: {
            id: user.id,
          },
        },
      },

      where: {
        id: flickId,
      },
    });
    return flick;
  });

export const saveFlick = protectedProcedure
  .input(
    z.object({
      flickId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { flickId } = input;
    const { user } = ctx.session;
    const flick = await ctx.db.flick.update({
      data: {
        savedBy: {
          connect: {
            id: user.id,
          },
        },
      },

      where: {
        id: flickId,
      },
    });
    return flick;
  });
