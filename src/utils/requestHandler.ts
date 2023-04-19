import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import Logger from './Logger';
import { onError } from './ResponseFormatter';

export const errorHandler: ErrorRequestHandler = async (error, request, response, next) => {
  Logger.error(error);

  return onError(response, {
    message: 'Error occured',
    status: 500,
    error: error.message,
  });
};
export const notFoundHandler = async (request: Request, response: Response, next: NextFunction) => {
  return onError(response, {
    message: 'Path not found try /api-docs to get documentation',
    status: 404,
  });
};
