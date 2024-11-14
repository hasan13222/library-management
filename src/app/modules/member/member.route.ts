import express from "express";
import { memeberControllers } from "./member.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { memberValidations } from "./member.validation";

const router = express.Router();

router.post("/", validateRequest(memberValidations.createMemberValidationSchema), memeberControllers.createMember);
router.get('/', memeberControllers.getAllMember);
router.get('/:memberId', memeberControllers.getSingleMember);
router.put('/:memberId', validateRequest(memberValidations.updateMemberValidationSchema), memeberControllers.updateSingleMember);
router.delete('/:memberId', memeberControllers.deleteMember);

export const memeberRoutes = router;
