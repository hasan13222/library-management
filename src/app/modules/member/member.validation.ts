import { z } from "zod";

const createMemberValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    membershipDate: z.string().optional(),
  }),
});

const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    membershipDate: z.date().optional(),
  }),
});
export const memberValidations = {
  createMemberValidationSchema,
  updateMemberValidationSchema,
};
