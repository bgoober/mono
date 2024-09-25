import { createPaperReview } from "~/server/api/routers/paperReview/create";
import { createTRPCRouter } from "~/server/api/trpc";

export const paperReviewRouter = createTRPCRouter({
  create: createPaperReview,
});
