import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import { LoggedInUserRequest } from '../middlewares/isLoggedIn';
import { UserService } from '../services/';
import { getValueWithDefault } from '../utils/getValueWithDefault';
import { onError, onSuccess } from '../utils/ResponseFormatter';

export default class UserController {
  static async signup(request: Request, response: Response) {
    const { name, password, email } = request.body;
    if (await UserService.findUser({ email })) {
      return onError(response, { status: 409, message: 'User already exists' });
    }
    const result = await UserService.createUser({ name, email, password });
    return onSuccess(response, { message: 'User added successfully', data: result, status: 201 });
  }
  static async fetchUsers(request: Request, response: Response) {
    const users = await UserService.getUsers();
    return onSuccess(response, { message: 'Fetched users successfully', data: users });
  }
  static async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const user = await UserService.findUser({ email });
    //@ts-ignore
    if (!user || !(await user.comparePassword(password)))
      return onError(response, { message: 'Incorrect credentials', status: 401 });
    const token = await jwt.sign(
      {
        user: user,
      },
      SECRET,
      {
        expiresIn: '48h',
      }
    );

    return onSuccess(response, {
      message: 'Logged in successfully',
      data: { token },
    });
  }
  static async deleteAccount(request: LoggedInUserRequest, response: Response) {
    const { password } = request.body;
    const userId = getValueWithDefault(request.user?._id, '');
    const user = await UserService.findUser({ id: userId });
    //@ts-ignore
    if (!(await user.comparePassword(password))) {
      return onError(response, { status: 409, message: 'Invalid password' });
    }
    //@ts-ignore
    if (!user || !(await user.comparePassword(password)))
      return onError(response, { message: 'Incorrect login credentials' });
    const deletedAccount = await UserService.deleteUser(user.id);
    onSuccess(response, {
      message: 'Account deleted successfully',
      data: deletedAccount,
    });
  }
  static async updateAccount(request: LoggedInUserRequest, response: Response) {
    const { name, password } = request.body;
    const userId = getValueWithDefault(request.user?._id, '');
    const user = await UserService.updateUser(userId, { name, password });
    return onSuccess(response, {
      message: 'Account deleted successfully',
      data: user,
    });
  }
}
