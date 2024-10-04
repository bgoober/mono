import { z } from "zod";

export const NewProposalFormData = z.object({
  title: z.string().trim().min(2, "Title must be at least 2 characters"),
  description: z
    .string()
    .trim()
    .min(2, "Description must be at least 2 characters"),
  quorum: z.number().min(1, "Quorum must be at least 1"),
  endDate: z.date(),
  daoId: z.string(),
  publicKey: z.string(),
});

export const NewDAOFormData = z.object({
  name: z.string().trim().min(2, "Title must be at least 2 characters"),
  description: z
    .string()
    .trim()
    .min(2, "Description must be at least 2 characters"),
  type: z.enum(["NFT", "TOKEN", "HYBRID"]),
  tokenPublicKey: z
    .string()
    .trim()
    .min(2, "Token public key must be at least 2 characters"),
  allowSubDAO: z.boolean(),
  subDAOCreationThreshold: z
    .number()
    .min(1, "Sub DAO creation threshold must be at least 1"),
});

export const CampaignFormData = z.object({
  title: z.string().trim().min(2, "Title must be at least 2 characters"),
  description: z
    .string()
    .trim()
    .min(2, "Description must be at least 2 characters"),
  goal: z.number().min(1, "Goal must be at least 1"),
  end: z.date(),
});

export const PledgeFormData = z.object({
  amount: z.number().min(1, "Amount must be at least 1"),
  message: z.string().trim().min(2, "Message must be at least 2 characters"),
});

export const ProfileFormData = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  organization: z.string().trim().optional(),
  website: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  socialLink: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  bio: z.string().trim().max(500, "Bio must be 500 words or less").optional(),
  profileImage: z.string().optional(),
});

export const PaperFormData = z.object({
  title: z.string().trim().min(5, "Title must be at least 5 characters"),
  authors: z.string().trim().min(5, "Must be at least 1 author"),
  description: z
    .string()
    .trim()
    .min(250, "Description must be at least 250 words"),
  domains: z.string().trim().min(5, "Must be at least 1 domain"),
  paperImage: z.string().optional(),
  paperFile: z
    .instanceof(File, { message: "Please upload a PDF file" })
    .refine(
      (file) => file.size <= 5000000,
      "File size should be less than 5 MB",
    )
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed",
    ),
});

export const ReviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  rating: z.number(),
  reviewers: z.object({
    id: z.string(),
    name: z.string(),
  }),
  user_id: z.string(),
  paper_id: z.string(),
});

export const PaperSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  paper_pubkey: z.string().nullable(),
  title: z.string().trim().min(5, "Title must be at least 5 characters"),
  status: z.string(),
  authors: z.array(z.string()),
  domains: z.array(z.string()),
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
  created_at: z.string(),
  updated_at: z.string().nullable(),
  peer_reviews: z.array(ReviewSchema),
});

export const BountyFormData = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  description: z.string(),
  track: z.enum(["FRONTEND", "BACKEND", "RUST"]),
  compensationAmount: z.number().min(0, "Cannot pay negative amount"),
  pointOfContactId: z.string(),
  skills: z.array(z.string()),
  tokenId: z.string(),
  companyId: z.string().optional(),
});

export const TokenFormData = z.object({
  name: z.string(),
  ticker: z.string(),
  address: z.string(),
  image: z.string(),
  decimals: z.number().min(0, "Cannot have a negative number of decimals!"),
});

export const RatingSchema = z.object({
  qualityOfResearch: z.number().min(1).max(5),
  potentialForRealWorldUseCase: z.number().min(1).max(5),
  domainKnowledge: z.number().min(1).max(5),
  practicalityOfResultObtained: z.number().min(1).max(5),
});

// TypeScript types
export type ProfileFormData = z.infer<typeof ProfileFormData>;
export type PaperFormData = z.infer<typeof PaperFormData>;
export type Review = z.infer<typeof ReviewSchema>;
export type Paper = z.infer<typeof PaperSchema>;
export type Rating = z.infer<typeof RatingSchema>;
