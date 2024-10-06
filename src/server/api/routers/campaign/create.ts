import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const createCampaign = protectedProcedure
  .input(z.object({
    title: z.string(),
    description: z.string(),
    goal: z.number().int().positive(),
    ends: z.date(),
  }))
  .mutation(async ({ ctx, input }) => {
    const { title, description, goal, ends } = input;
    const { user } = ctx.session;

    // Create Campaign
    const campaign = await ctx.db.campaign.create({
      data: {
        title,
        description,
        goal,
        ends,
        current: 0,
        creator: { connect: { id: user.id } },
      },
    });

    return campaign;
  });