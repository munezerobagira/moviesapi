import { Request, Response } from 'express';
import { createUser, findUser, getUsers } from '../services/User';
import { onError, onSuccess } from '../util/ResponseFormatter';

export default class UserController {
  static async signup(request: Request, response: Response) {
    const { name, password, email } = request.body;
    if (await findUser({ email })) {
      return onError(response, { status: 409, message: 'User already exists' });
    }
    const result = await createUser({ name, email, password });

    return onSuccess(response, { message: 'User added successfully', data: result, status: 201 });
  }
  static async fetchUsers(request: Request, response: Response) {
    const users = await getUsers();
    return onSuccess(response, { message: 'Fetched users successfully', data: users });
  }
}
