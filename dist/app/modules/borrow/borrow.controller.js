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
exports.borrowControllers = void 0;
const borrow_service_1 = require("./borrow.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = require("http-status-codes");
const createBorrow = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.createBorrowIntoDb(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.CREATED,
        message: "Book Borrowed successfully",
        data: result,
    });
}));
const getOverdueBorrow = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.getOverdueBorrowFromDb();
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Overdue Book retrieved successfully",
        data: result,
    });
}));
const returnBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.borrowServices.returnBorrowBookIntoDb(req.body.borrowId);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book return done successfully",
        data: result,
    });
}));
exports.borrowControllers = { createBorrow, getOverdueBorrow, returnBook };
