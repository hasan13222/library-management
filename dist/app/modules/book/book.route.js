"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.validateRequest)(book_validation_1.bookValidations.createBookValidationSchema), book_controller_1.bookControllers.createBook);
router.get('/', book_controller_1.bookControllers.getAllBook);
router.get('/:bookId', book_controller_1.bookControllers.getSingleBook);
router.put('/:bookId', (0, validateRequest_1.validateRequest)(book_validation_1.bookValidations.updateBookValidationSchema), book_controller_1.bookControllers.updateSingleBook);
router.delete('/:bookId', book_controller_1.bookControllers.deleteBook);
exports.bookRoutes = router;
