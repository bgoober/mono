import { z } from "zod";

export const ProfileFormData = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  socialLink: z.string().url("Invalid URL").optional().or(z.literal("")),
  bio: z.string().max(500, "Bio must be 500 characters or less").optional(),
  profileImage: z.string().optional(),
});

export type ProfileFormData = z.infer<typeof ProfileFormData>;
