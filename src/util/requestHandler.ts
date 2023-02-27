import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import Logger from './Logger';

export const errorHandler: ErrorRequestHandler = async (error, request, response, next) => {
  Logger.error(error);
  response.status(500).json({
    message: 'Error occured',
  });
};
export const notFoundHandler = async (request: Request, response: Response, next: NextFunction) => {
  return response.status(404).json({
    message: 'Path not found',
  });
};
