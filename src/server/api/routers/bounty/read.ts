import { protectedProcedure } from "~/server/api/trpc";
import {z} from "zod";

export const readAllBounties = protectedProcedure.query(async ({ctx}) => {
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

export const readAllApplications = protectedProcedure.query(async ({ctx}) => {
  return await ctx.db.bountyApplication.findMany({
    include: {
      user: true
    }
  })
})

export const readBounty = protectedProcedure.input(z.object({bountyId: z.string()}))
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