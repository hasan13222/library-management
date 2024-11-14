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
    where: {
      AND: [
        { returnDate: { equals: null } },
        { borrowDate: { lt: fourteenDaysAgo } },
      ],
    },
  });

  return result;
};

const returnBorrowBookIntoDb = async (id: string) => {
  const result = await prisma.borrowRecord.update({
    where: { borrowId: id },
    data: { returnDate: new Date() },
  });
  return result;
};

export const borrowServices = {
  createBorrowIntoDb,
  getOverdueBorrowFromDb,
  returnBorrowBookIntoDb,
};
