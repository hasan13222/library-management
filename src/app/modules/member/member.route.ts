import express from "express";
import { memeberControllers } from "./member.controller";

const router = express.Router();

router.post("/", memeberControllers.createMember);

export const memeberRoutes = router;
