import { publicProcedure } from "~/server/api/trpc";
import { type UnwrapArray, type UnwrapPromise } from "~/utils";
import { z } from "zod";

export const read = publicProcedure.query(({ ctx }) => {
  const response = ctx.db.flick.findMany({
    include: {
      likedBy: true,
      savedBy: true,
      creator: true,
      responses: {
        include: {
          creator: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  console.log("read", response);
  return response;
});

export const search = publicProcedure
  .input(
    z.object({
      query: z.string(),
    }),
  )
  .query(({ ctx, input }) => {
    const { query } = input;
    return ctx.db.flick.findMany({
      where: {
        description: { contains: query, mode: "insensitive" },
      },
    });
  });

export type Flick = UnwrapArray<UnwrapPromise<ReturnType<typeof read>>>;
export type FlickSearchResult = UnwrapArray<
  UnwrapPromise<ReturnType<typeof search>>
>;
export type FlickResponse = Flick["responses"][number];
