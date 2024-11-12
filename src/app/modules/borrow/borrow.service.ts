import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../constants/prismaClient";
const createBorrowIntoDb = async (payload: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({ data: payload });

  return result;
};

const getOverdueBorrowFromDb = async () => {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
  
  const result = await prisma.borrowRecord.findMany({
    where: { borrowDate: { lt: fourteenDaysAgo } },
  });

  return result;
};

export const borrowServices = { createBorrowIntoDb, getOverdueBorrowFromDb };
