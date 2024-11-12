import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { bookServices } from "./book.service";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.createBookIntoDb(req.body);

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getAllBookFromDb();

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "All Book retrieved successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const result = await bookServices.getSingleBookFromDb(id);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const result = await bookServices.updateBookIntoDb(id, req.body);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const result = await bookServices.deleteBookIntoDb(id);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Book deleted successfully",
    data: result,
  });
});
export const bookControllers = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteBook
};
