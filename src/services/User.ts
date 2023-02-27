import { FilterQuery } from 'mongoose';
import User from '../models/User';
import { type UserInterface } from '../types/User';

export async function createUser({ name, email, password }: UserInterface) {
  const createdUser = await User.create({
    name,
    email,
    password,
  });
  return createdUser;
}
export async function updateUser(id: string, { name, password }: Omit<UserInterface, 'email'>) {
  const createdUser = await User.updateOne({
    name,
    password,
  });
  return createdUser;
}
export async function deleteUser(id: string) {
  const deletedUser = await User.findOneAndDelete({
    id,
  });
  return deletedUser;
}
export async function findUser(
  options: FilterQuery<
    { createdAt: NativeDate; updatedAt: NativeDate } & { name: string; email: string; password: string }
  >
) {
  const foundUser = await User.findOne(options);
  return foundUser;
}
export async function getUsers() {
  const users = await User.find();
  return users;
}
