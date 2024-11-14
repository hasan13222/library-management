import { Member } from "@prisma/client";
import { prisma } from "../../constants/prismaClient";

const createMemeberIntoDb = async (payload: Member) => {
  const result = await prisma.member.create({ data: payload });

  return result;
};

const getAllMemberFromDb = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getSingleMemberFromDb = async (id: string) => {
  const result = await prisma.member.findUnique({ where: { memberId: id } });
  return result;
};

const updateMemberIntoDb = async (id: string, payload: Partial<Member>) => {
  const result = await prisma.member.update({
    where: { memberId: id },
    data: payload,
  });
  return result;
};

const deleteMemberIntoDb = async (id: string) => {
  const result = await prisma.member.delete({ where: { memberId: id } });
  return result;
};

export const memberServices = {
  createMemeberIntoDb,
  getAllMemberFromDb,
  getSingleMemberFromDb,
  updateMemberIntoDb,
  deleteMemberIntoDb,
};
