import { NextFunction, Request, Response } from 'express';
import Logger from './Logger';

type ControllerFunction = (request: Request, response: Response, next?: NextFunction) => Promise<unknown>;

export default function asyncHandler(fn: ControllerFunction) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await fn(request, response);
    } catch (error) {
      Logger.error(error);
      next(error);
    }
  };
}
