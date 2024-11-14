import express from "express";
import { borrowControllers } from "./borrow.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { borrowValidations } from "./borrow.validation";

const router = express.Router();
const returnRouter = express.Router();

router.post(
  "/",
  validateRequest(borrowValidations.createBorrowValidationSchema),
  borrowControllers.createBorrow
);
router.get("/overdue", borrowControllers.getOverdueBorrow);

returnRouter.post(
  "/",
  validateRequest(borrowValidations.returnBorrowValidationSchema),
  borrowControllers.returnBook
);

export const borrowRoutes = router;
export const returnRoutes = returnRouter;
