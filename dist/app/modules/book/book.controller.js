"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const book_service_1 = require("./book.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = require("http-status-codes");
const createBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.createBookIntoDb(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.CREATED,
        message: "Book created successfully",
        data: result,
    });
}));
const getAllBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.getAllBookFromDb();
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "All Book retrieved successfully",
        data: result,
    });
}));
const getSingleBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const result = yield book_service_1.bookServices.getSingleBookFromDb(id);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book retrieved successfully",
        data: result,
    });
}));
const updateSingleBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const result = yield book_service_1.bookServices.updateBookIntoDb(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const result = yield book_service_1.bookServices.deleteBookIntoDb(id);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book deleted successfully",
        data: result,
    });
}));
exports.bookControllers = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteBook
};
