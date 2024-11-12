import { Request, Response } from "express";
import { memberServices } from "./member.service";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createMember = async (req: Request, res: Response) => {
  const result = await memberServices.createMemeberIntoDb(req.body);
  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "Book created successfully",
    data: result,
  });
};

export const memeberControllers = { createMember };
