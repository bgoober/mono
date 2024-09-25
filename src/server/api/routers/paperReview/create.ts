
import {
    protectedProcedure
  } from "~/server/api/trpc";

  import { z } from "zod";
import { PaperStatus, ResearchDomain } from "@prisma/client";

  export const createPaper = protectedProcedure.input(z.object({
    id: z.string(),
    description: z.string(),
    rating: z.number(),
    user_id: z.string(),
    paper_id: z.string(),
  })).mutation(async ({ ctx, input }) => {
    const { id, description, rating, user_id, paper_id } = input;
    const paperReview = await ctx.db.paperReview.create({ data: { id, description, rating, userId: user_id, paperId: paper_id } });
    return paperReview;
  });

