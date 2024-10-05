import { publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { UnwrapArray, UnwrapPromise } from "~/utils";

export const getCampaigns = publicProcedure.query(({ ctx }) => {
  return ctx.db.campaign.findMany({
    include: {
      creator: true,
      backers: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
});

export const getCampaign = publicProcedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.db.campaign.findUnique({
      where: { id },
      include: {
        creator: true,
        backers: {
          include: {
            user: true,
          },
        },
      },
    });
  });

export const searchCampaigns = publicProcedure
  .input(
    z.object({
      query: z.string(),
    }),
  )
  .query(({ ctx, input }) => {
    const { query } = input;
    return ctx.db.campaign.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      include: {
        creator: true,
      },
    });
  });

export type Campaign = UnwrapArray<
  UnwrapPromise<ReturnType<typeof getCampaigns>>
>;
export type Backer = Campaign["backers"][number];
