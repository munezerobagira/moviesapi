import { Request, Response } from 'express';
import { LoggedInUserRequest } from '../middlewares/isLoggedIn';
import {
  createMovieList,
  getUserLists,
  addMovieToList,
  removeMovieFromList,
  updateMovieRank,
  getListMovies,
} from '../services/MovieList';
import { getValueWithDefault } from '../utils/getValueWithDefault';
import { onError, onSuccess } from '../utils/ResponseFormatter';

export default class MovieListController {
  static async createList(request: LoggedInUserRequest, response: Response) {
    const { name } = request.body;
    const user = request.user;
    const movieList = await createMovieList({ name, userId: getValueWithDefault(user?._id, '') });
    return onSuccess(response, { message: 'Movie list created successfully', data: movieList, status: 201 });
  }
  static async userList(request: LoggedInUserRequest, response: Response) {
    const user = request.user;
    const movieLists = await getUserLists(getValueWithDefault(user?._id, ''));
    return onSuccess(response, { message: 'Movie lists fetched successfully', data: movieLists });
  }
  static async addMovie(request: LoggedInUserRequest, response: Response) {
    const { listId } = request.params;
    const { movieId } = request.body;
    const user = request.user;
    const addedMovie = await addMovieToList({ userId: getValueWithDefault(user?._id, ''), listId, movieId });
    return onSuccess(response, { message: 'Movie added successfully' });
  }
  static async removeMovie(request: LoggedInUserRequest, response: Response) {
    const { listId, movieId } = request.params;
    const user = request.user;
    const addedMovie = await removeMovieFromList({ userId: getValueWithDefault(user?._id, ''), listId, movieId });
    return onSuccess(response, { message: 'Movie removed successfully' });
  }
  static async updateMovieRank(request: LoggedInUserRequest, response: Response) {
    const { listId, movieId } = request.params;
    const { rank } = request.body;
    const user = request.user;
    const updatedMovie = await updateMovieRank({ userId: getValueWithDefault(user?._id, ''), listId, movieId, rank });
    return onSuccess(response, { message: 'Movie updated successfully' });
  }
  static async getListMovies(request: LoggedInUserRequest, response: Response) {
    const { listId } = request.params;
    const user = request.user;
    const updatedMovie = await getListMovies({ userId: getValueWithDefault(user?._id, ''), listId });
    return onSuccess(response, { message: 'Movie lists fetched successfully', data: updatedMovie });
  }
}
