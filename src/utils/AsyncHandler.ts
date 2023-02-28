import { NextFunction, Request, Response } from 'express';
import { LoggedInUserRequest } from '../middlewares/isLoggedIn';
import Logger from './Logger';

export type ControllerFunction = (
  request: LoggedInUserRequest,
  response: Response,
  next: NextFunction
) => Promise<unknown>;

export default function asyncHandler(fn: ControllerFunction) {
  return async (request: Request | LoggedInUserRequest, response: Response, next: NextFunction) => {
    try {
      await fn(request, response, next);
    } catch (error) {
      Logger.error(error);
      next(error);
    }
  };
}
