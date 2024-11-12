import { Member } from "@prisma/client";
import { prisma } from "../../constants/prismaClient";

const createMemeberIntoDb = async (payload: Member) => {
  const result = await prisma.member.create({ data: payload });

  return result;
};

export const memberServices = { createMemeberIntoDb };
