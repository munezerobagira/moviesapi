import { NextFunction, Request, Response } from 'express';
import { type ObjectSchema } from 'joi';
import asyncHandler from '../utils/AsyncHandler';
import { onError } from '../utils/ResponseFormatter';
/**
 * Validate the request,path like body, params using joi schema
 * @param schema
 * @param path
 * @returns
 */
type ValidatableRequestFields = 'body' | 'params' | 'query' | 'headers';
function requestValidatorFunction(schema: ObjectSchema, path: ValidatableRequestFields) {
  return async function (request: Request, response: Response, next: NextFunction) {
    try {
      const { value, error } = await schema.validate(request[path], { abortEarly: true });
      if (error)
        return onError(response, {
          status: 400,
          message: 'Validation error',
          error: error.message,
        });
      request[path] = value;
      return next();
    } catch (error) {
      return onError(response, {
        status: 400,
        message: error as string,
      });
    }
  };
}
const requestValidator = (schema: ObjectSchema, path: ValidatableRequestFields = 'body') =>
  asyncHandler(requestValidatorFunction(schema, path));

export default requestValidator;
