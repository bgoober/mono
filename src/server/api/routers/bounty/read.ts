import { publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { type UnwrapArray, type UnwrapPromise } from "~/utils";
import {z} from "zod";

export const readAllBounties = publicProcedure.query(async ({ctx}) => {
  return await ctx.db.bounty.findMany({
    include: {
      company: true,
      compensation: true,
      skills: true,
      pointOfContact: true,
      applications: true,
    }
  })
})

export const readOwnedBounties = protectedProcedure.query(async ({ctx}) => {
  return await ctx.db.bounty.findMany({
    where: {
      pointOfContactId: ctx.session.user.id
    },
    include: {
      company: true,
      compensation: true,
      skills: true,
      pointOfContact: true,
      applications: true,
    }
  })
})

export const readWorkingBounties = protectedProcedure.query(async ({ctx}) => {
  return await ctx.db.bounty.findMany({
    where: {
      applications: {
        some: {
          userId: ctx.session.user.id,
          status: "ACCEPTED"
        }
      }
    },
    include: {
      company: true,
      compensation: true,
      skills: true,
      pointOfContact: true,
      applications: true,
    }
  })
})

export const readAllApplications = publicProcedure.input(z.object({bountyId: z.string()})).query(async ({ctx, input}) => {
  return await ctx.db.bountyApplication.findMany({
    where:{
      bountyId: input.bountyId,
    },
    include: {
      user: true
    }
  })
})

export const readBounty = publicProcedure.input(z.object({bountyId: z.string()}))
.query(async ({ctx, input}) => {
  return ctx.db.bounty.findUnique({
    where: {id: input.bountyId},
    include: {
      company: true,
      compensation: true,
      skills: true,
      pointOfContact: true,
      applications: true,
    }
  })
})

export type Bounties = UnwrapArray<UnwrapPromise<ReturnType<typeof readAllBounties>>>;
export type Bounty = UnwrapArray<UnwrapPromise<ReturnType<typeof readBounty>>>;
export type User = Bounties["pointOfContact"];
export type BountyApplications = UnwrapArray<UnwrapPromise<ReturnType<typeof readAllApplications>>>;