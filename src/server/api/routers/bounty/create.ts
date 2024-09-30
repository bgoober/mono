import { protectedProcedure } from "~/server/api/trpc";
import {z} from "zod";

export const createBounty = protectedProcedure.input(z.object({
  title: z.string().trim().min(5, "Title must have a length of at least 5 characters!"),
  description: z.string(),
  companyId: z.string(),
  pointOfContactId: z.string(),
  compensationAmount: z.number(),
  tokenId: z.string(),
  skills: z.array(z.string()) //Skill Ids
}))
.mutation(async ({ctx, input}) => {
  return await ctx.db.$transaction(async db => {
    const companyExists = await db.company.findUnique({
      where: {id: input.companyId}
    })

    if (!companyExists){
      throw new Error("Company not found!")
    }

    const pointOfContactExists = await db.user.findUnique({
      where:{id: input.pointOfContactId}
    })

    if (!pointOfContactExists){
      throw new Error("Point of contact (User) not found!")
    }

    //Create Compensation
    const compensation = await db.compensation.create({
      data: {
        amount: input.compensationAmount,
        tokenId: input.tokenId,
      }
    });

    //Create Bounty
    const bounty = await db.bounty.create({
      data:{
        name: input.title,
        description: input.description,
        companyId: input.companyId,
        pointOfContactId: input.pointOfContactId,
        compensationId: compensation.id,
        skills: {
          connect: input.skills.map(skillId => ({id: skillId}))
        }
      }
    });

    return bounty;
  })
} )

//Create Bounty Application
export const createApplication = protectedProcedure.input(z.object({
  bountyId: z.string(),
  userId: z.string(),
})).mutation(async ({ctx, input}) => {
  const application = await ctx.db.bountyApplication.create({
    data: {
      bountyId: input.bountyId,
      userId: input.userId,
    }
  })

  return application;
})