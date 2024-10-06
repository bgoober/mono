import { protectedProcedure } from "~/server/api/trpc";

import { z } from "zod";
export const unlikeFlick = protectedProcedure
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
          disconnect: {
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

export const unsaveFlick = protectedProcedure
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
          disconnect: {
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
