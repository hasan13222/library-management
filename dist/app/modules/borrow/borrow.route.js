"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRoutes = exports.borrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("./borrow.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const borrow_validation_1 = require("./borrow.validation");
const router = express_1.default.Router();
const returnRouter = express_1.default.Router();
router.post("/", (0, validateRequest_1.validateRequest)(borrow_validation_1.borrowValidations.createBorrowValidationSchema), borrow_controller_1.borrowControllers.createBorrow);
router.get("/overdue", borrow_controller_1.borrowControllers.getOverdueBorrow);
returnRouter.post("/", (0, validateRequest_1.validateRequest)(borrow_validation_1.borrowValidations.returnBorrowValidationSchema), borrow_controller_1.borrowControllers.returnBook);
exports.borrowRoutes = router;
exports.returnRoutes = returnRouter;
