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
exports.borrowServices = void 0;
const prismaClient_1 = require("../../constants/prismaClient");
const createBorrowIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.borrowRecord.create({ data: payload });
    return result;
});
const getOverdueBorrowFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const result = yield prismaClient_1.prisma.borrowRecord.findMany({
        where: {
            AND: [
                { returnDate: { equals: null } },
                { borrowDate: { lt: fourteenDaysAgo } },
            ],
        },
    });
    return result;
});
const returnBorrowBookIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.borrowRecord.update({
        where: { borrowId: id },
        data: { returnDate: new Date() },
    });
    return result;
});
exports.borrowServices = {
    createBorrowIntoDb,
    getOverdueBorrowFromDb,
    returnBorrowBookIntoDb,
};
