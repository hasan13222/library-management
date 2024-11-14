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
exports.memberServices = void 0;
const prismaClient_1 = require("../../constants/prismaClient");
const createMemeberIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.member.create({ data: payload });
    return result;
});
const getAllMemberFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.member.findMany();
    return result;
});
const getSingleMemberFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.member.findUnique({ where: { memberId: id } });
    return result;
});
const updateMemberIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.member.update({
        where: { memberId: id },
        data: payload,
    });
    return result;
});
const deleteMemberIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.member.delete({ where: { memberId: id } });
    return result;
});
exports.memberServices = {
    createMemeberIntoDb,
    getAllMemberFromDb,
    getSingleMemberFromDb,
    updateMemberIntoDb,
    deleteMemberIntoDb,
};
