import { Router } from 'express';
import MoviesController from '../controllers/Movies.controller';
import { requestValidator } from '../middlewares';
import asyncHandler from '../utils/AsyncHandler';

const router = Router();
router.get('/', asyncHandler(MoviesController.getMovies));
router.get('/search', asyncHandler(MoviesController.searchMovie));
router.get('/:movieId', asyncHandler(MoviesController.getMovieById));
export default router;
