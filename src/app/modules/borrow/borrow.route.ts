import express from "express";
import { borrowControllers } from "./borrow.controller";

const router = express.Router();
const returnRouter = express.Router();

router.post("/", borrowControllers.createBorrow);
router.get("/overdue", borrowControllers.getOverdueBorrow);

returnRouter.post('/', )

export const borrowRoutes = router;
export const returnRoutes = returnRouter;
