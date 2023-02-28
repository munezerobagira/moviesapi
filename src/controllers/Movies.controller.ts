import { Request, Response } from 'express';
import { Logger } from '../utils';
import { tmdbAxiosInstance } from '../utils/axios';
import { onError, onSuccess } from '../utils/ResponseFormatter';

export default class SampleController {
  static async getMovies(request: Request, response: Response) {
    const result = await tmdbAxiosInstance.get('/movie/popular');
    return onSuccess(response, { message: 'Fetched movies', data: result.data });
  }
  static async getMovieById(request: Request, response: Response) {
    const { movieId } = request.params;
    const result = await tmdbAxiosInstance.get(`/movie/${movieId}`);
    return onSuccess(response, { message: 'Fetched  movie', data: result.data });
  }
  static async searchMovie(request: Request, response: Response) {
    const { keywords } = request.query;
    const result = await tmdbAxiosInstance.get(`/discover/movie?with_keywords=${keywords}`);
    return onSuccess(response, { message: 'Searched movies', data: result.data });
  }
}
