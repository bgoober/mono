import {
    protectedProcedure
  } from "~/server/api/trpc";

  import { z } from "zod";
import { PaperStatus, ResearchDomain } from "@prisma/client";

  export const createPaper = protectedProcedure.input( z.object({
    paper_pubkey: z.string(),
    title: z.string().trim().min(5, "Title must be at least 5 characters"),
    status: z.nativeEnum(PaperStatus),
    authors: z.array(z.string()),
    domains: z.array(z.nativeEnum(ResearchDomain)),
    description: z
      .string()
      .trim()
      .min(250, "Description must be at least 250 words"),
    price: z.number().nullable(),
    image_url: z.string(),
    pdf_url: z.string(),
    minted: z.array(
      z.object({
        user_id: z.string(),
        // TODO: Add user_wallet_address when available
      }),
    ),
    version: z.number(),
  })).mutation(async ({ ctx, input }) => {
    const {   paper_pubkey, title, status, authors, domains, description, price, image_url, pdf_url, minted, version } = input;
    const userIds = authors.map(async (author) => {
        const user = await ctx.db.user.findUnique({ where: { username: author } });
        return user?.id;
    });
    await Promise.all(userIds);
    const imageLink = await ctx.db.link.create({ data: { url: image_url, type: "image", title: "Image" } });
    const pdfLink = await ctx.db.link.create({ data: { url: pdf_url, type: "pdf", title: "PDF" } });

    const { user } = ctx.session;
    const paper = await ctx.db.paper.create({ data: {  publicKey: paper_pubkey, title,  description, status, authors: {connect: {id: user.id}}, domains, price, minted: 0, version: 1, links: {connect: [imageLink, pdfLink] } } });
    return paper;
  });