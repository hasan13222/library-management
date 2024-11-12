import { Request, Response } from "express";
import { borrowServices } from "./borrow.service";

const createBorrow = async (req: Request, res: Response) => {
  const result = await borrowServices.createBorrowIntoDb(req.body);
  return res.json({ result });
};

const getOverdueBorrow = async (req: Request, res: Response) => {
  const result = await borrowServices.getOverdueBorrowFromDb();
  return res.json({ result });
};

export const borrowControllers = { createBorrow, getOverdueBorrow };
