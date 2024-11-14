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
exports.bookServices = void 0;
const prismaClient_1 = require("../../constants/prismaClient");
const createBookIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.book.create({ data: payload });
    return result;
});
const getAllBookFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.book.findMany();
    return result;
});
const getSingleBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.book.findUnique({ where: { bookId: id } });
    return result;
});
const updateBookIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.book.update({
        where: { bookId: id },
        data: payload,
    });
    return result;
});
const deleteBookIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.book.delete({ where: { bookId: id } });
    return result;
});
exports.bookServices = {
    createBookIntoDb,
    getAllBookFromDb,
    getSingleBookFromDb,
    updateBookIntoDb,
    deleteBookIntoDb
};
