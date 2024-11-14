"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memeberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.validateRequest)(member_validation_1.memberValidations.createMemberValidationSchema), member_controller_1.memeberControllers.createMember);
router.get('/', member_controller_1.memeberControllers.getAllMember);
router.get('/:memberId', member_controller_1.memeberControllers.getSingleMember);
router.put('/:memberId', (0, validateRequest_1.validateRequest)(member_validation_1.memberValidations.updateMemberValidationSchema), member_controller_1.memeberControllers.updateSingleMember);
router.delete('/:memberId', member_controller_1.memeberControllers.deleteMember);
exports.memeberRoutes = router;
