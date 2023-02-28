import { Router } from 'express';
import MovieListController from '../controllers/MovieList.controller';
import { requestValidator } from '../middlewares';
import { movieListSchema, listIdSchema, movieSchema } from '../validations/movies';
import asyncHandler from '../utils/AsyncHandler';

const router = Router();
router.get('/', asyncHandler(MovieListController.userList));
router.post('/', asyncHandler(MovieListController.createList));
router.get('/:listId', [requestValidator(listIdSchema, 'params')], asyncHandler(MovieListController.getListMovies));
router.post(
  '/:listId',
  [requestValidator(listIdSchema, 'params'), requestValidator(movieSchema)],
  asyncHandler(MovieListController.addMovie)
);
router.delete(
  '/:listId/:movieId',
  [requestValidator(movieListSchema, 'params')],
  asyncHandler(MovieListController.removeMovie)
);
router.patch(
  '/:listId/:movieId',
  [requestValidator(movieListSchema, 'params')],
  asyncHandler(MovieListController.updateMovieRank)
);

export default router;
