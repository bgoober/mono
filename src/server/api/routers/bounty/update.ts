import { protectedProcedure } from "~/server/api/trpc";
import {z} from "zod";

// export const acceptApplication = protectedProcedure.input(z.object({applicationId: z.string()})).mutation(async ({ctx, input}) => {
//   return await ctx.db.bountyApplication.update({
//     where: {id: input.applicationId},
//     data: {status: "ACCEPTED"}
//   })
// })

// export const rejectApplication = protectedProcedure.input(z.object({applicationId: z.string()})).mutation(async ({ctx, input}) => {
//   return await ctx.db.bountyApplication.update({
//     where: {id: input.applicationId},
//     data: {status: "ACCEPTED"}
//   })
// })

// export const startBounty = protectedProcedure.input(z.object({bountyId: z.string()})).mutation(async ({ctx, input}) => {
//   return await ctx.db.bountyApplication.update({
//     where: {id: input.bountyId},
//     data: {status: "IN_PROGRESS"}
//   })
// })

// export const endBounty = protectedProcedure.input(z.object({bountyId: z.string()})).mutation(async ({ctx, input}) => {
//   return await ctx.db.bountyApplication.update({
//     where: {id: input.bountyId},
//     data: {status: "COMPLETED"}
//   })
// })