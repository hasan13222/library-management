import { Request, Response } from "express";
import { memberServices } from "./member.service";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.createMemeberIntoDb(req.body);
  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getAllMemberFromDb();

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "All Member retrieved successfully",
    data: result,
  });
});

const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.memberId;
  const result = await memberServices.getSingleMemberFromDb(id);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateSingleMember = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.memberId;
  const result = await memberServices.updateMemberIntoDb(id, req.body);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.memberId;
  const result = await memberServices.deleteMemberIntoDb(id);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: "Member deleted successfully",
    data: result,
  });
});

export const memeberControllers = { createMember, getAllMember,getSingleMember,updateSingleMember,deleteMember };
