
import {
    protectedProcedure
  } from "~/server/api/trpc";

  import { z } from "zod";

  export const createPaperReview = protectedProcedure.input(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    rating: z.number(),
    user_id: z.string(),
    paper_id: z.string(),
  })).mutation(async ({ ctx, input }) => {
    const { id, title, description, rating, user_id, paper_id } = input;
    const paperReview = await ctx.db.paperReview.create({ data: { title, id, description, rating, userId: user_id, paperId: paper_id } });
    return paperReview;
  });

