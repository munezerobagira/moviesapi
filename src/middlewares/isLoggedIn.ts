import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import { UserInterface } from '../types/User';
import { getValueWithDefault } from '../utils/getValueWithDefault';
import { onError } from '../utils/ResponseFormatter';
export interface LoggedInUserRequest extends Request {
  user?: UserInterface;
}
export const isLoggedIn = async (request: LoggedInUserRequest, response: Response, next: NextFunction) => {
  try {
    const token = request.headers && request.headers.authorization && request.headers.authorization.split(' ')[1];

    const user = (await jwt.verify(getValueWithDefault(token, ''), SECRET)) as unknown as { user: UserInterface };

    request.user = user.user as unknown as UserInterface;
    return next();
  } catch (error) {
    return onError(response, {
      status: 401,
      message: 'You are not authorized',
    });
  }
};
