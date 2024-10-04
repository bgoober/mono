import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const createBacker = protectedProcedure
  .input(z.object({
    amount: z.number().int().positive(),
    message: z.string(),
    campaignId: z.string(),
  }))
  .mutation(async ({ ctx, input }) => {
    const { amount, message, campaignId } = input;
    const { user } = ctx.session;

    // Create Backer
    const backer = await ctx.db.backer.create({
      data: {
        amount,
        message,
        campaign: { connect: { id: campaignId } },
        user: { connect: { id: user.id } },
      },
    });

    await ctx.db.campaign.update({
      where: { id: campaignId },
      data: { current: { increment: amount } },
    });

    return backer;
  });