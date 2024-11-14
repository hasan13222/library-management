import { Request, Response } from "express";
import { borrowServices } from "./borrow.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.createBorrowIntoDb(req.body);
  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "Book Borrowed successfully",
    data: result,
  });
});

const getOverdueBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.getOverdueBorrowFromDb();
  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Overdue Book retrieved successfully",
    data: result,
  });
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.returnBorrowBookIntoDb(req.body.borrowId);
  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Book return done successfully",
    data: result,
  });
});
export const borrowControllers = { createBorrow, getOverdueBorrow, returnBook };
