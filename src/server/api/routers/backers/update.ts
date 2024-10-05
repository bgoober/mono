import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const updateBacker = protectedProcedure
  .input(z.object({
    id: z.string(),
    amount: z.number().int().positive().optional(),
    message: z.string().optional(),
  }))
  .mutation(async ({ ctx, input }) => {
    const { id, ...updateData } = input;
    const { user } = ctx.session;

    const backer = await ctx.db.backer.findUnique({
      where: { id },
      include: { user: true, campaign: true },
    });

    if (!backer) {
      throw new Error("Backer not found");
    }

    if (backer.user.id !== user.id) {
      throw new Error("Not authorized to update this backer");
    }

    if (updateData.amount) {
      const amountDifference = updateData.amount - backer.amount;
      await ctx.db.campaign.update({
        where: { id: backer.campaign.id },
        data: { current: { increment: amountDifference } },
      });
    }

    // Update Backer
    const updatedBacker = await ctx.db.backer.update({
      where: { id },
      data: updateData,
    });

    return updatedBacker;
  });