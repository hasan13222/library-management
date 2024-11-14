"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowValidations = void 0;
const zod_1 = require("zod");
const createBorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowDate: zod_1.z.string().optional(),
        bookId: zod_1.z.string(),
        memberId: zod_1.z.string(),
    }),
});
const returnBorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string(),
    }),
});
exports.borrowValidations = {
    createBorrowValidationSchema,
    returnBorrowValidationSchema,
};
