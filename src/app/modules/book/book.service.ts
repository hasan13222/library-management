import { Book } from "@prisma/client";
import { prisma } from "../../constants/prismaClient";

const createBookIntoDb = async (payload: Book) => {
  const result = await prisma.book.create({ data: payload });
  return result;
};

const getAllBookFromDb = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getSingleBookFromDb = async (id: string) => {
  const result = await prisma.book.findUnique({ where: { bookId: id } });
  return result;
};

const updateBookIntoDb = async (id: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: { bookId: id },
    data: payload,
  });
  return result;
};

const deleteBookIntoDb = async (id: string) => {
  const result = await prisma.book.delete({ where: { bookId: id } });
  return result;
}

export const bookServices = {
  createBookIntoDb,
  getAllBookFromDb,
  getSingleBookFromDb,
  updateBookIntoDb,
  deleteBookIntoDb
};
