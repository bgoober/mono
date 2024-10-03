import {
    protectedProcedure
  } from "~/server/api/trpc";

  import { z } from "zod";
import { ProposalStatus, ProposalType } from "@prisma/client";
export const createProposal = protectedProcedure.input(z.object({
    title: z.string(),
    description: z.string(),
    publicKey: z.string(),
    quorum: z.number(),
    threshold: z.number(),
    endDate: z.number(),
    proposalType: z.nativeEnum(ProposalType),
    analysisPeriod: z.number(),
    uri: z.string(),
    daoId: z.string(),
})).mutation(async ({ ctx, input }) => {
    const { title, description, publicKey, quorum, threshold, endDate, daoId, proposalType, analysisPeriod, uri } = input;
    const { user } = ctx.session;
    const proposal = await ctx.db.proposal.create(
        { data:
            { title,
            description,
            publicKey,
            quorum,
            threshold,
            endDate,
            proposalType,
            analysisPeriod,
            uri,
            daoId,
            creatorId: user.id,
            forVotes: 0,
            againstVotes: 0,
            abstainVotes: 0,
            status: ProposalStatus.PENDING,
            } });
    return proposal;
});
