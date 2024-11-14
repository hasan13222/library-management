import { z } from "zod";

const createBorrowValidationSchema = z.object({
  body: z.object({
    borrowDate: z.string().optional(),
    bookId: z.string(),
    memberId: z.string(),
  }),
});

const returnBorrowValidationSchema = z.object({
  body: z.object({
    borrowId: z.string(),
  }),
});
export const borrowValidations = {
  createBorrowValidationSchema,
  returnBorrowValidationSchema,
};
