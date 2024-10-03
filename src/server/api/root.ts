import { entryRouter } from "~/server/api/routers/entry";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { devRouter } from "./routers/dev";
import { verificationRequestRouter } from "./routers/verificationRequests";
import { entryRevisionRouter } from "~/server/api/routers/entryRevision";
import { tagRouter } from "~/server/api/routers/tag";
import { sentenceParserRouter } from "~/server/api/routers/sentenceParser";
import { paperReviewRouter } from "~/server/api/routers/paperReview";
import { paperRouter } from "~/server/api/routers/paper";
import { proposalRouter } from "~/server/api/routers/proposal";
import { daoRouter } from "./routers/dao";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  entry: entryRouter,
  entryRevision: entryRevisionRouter,
  tag: tagRouter,
  dev: devRouter,
  verificationRequest: verificationRequestRouter,
  sentenceParser: sentenceParserRouter,
  paperReview: paperReviewRouter,
  paper: paperRouter,
  proposal: proposalRouter,
  dao : daoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
