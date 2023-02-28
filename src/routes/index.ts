import { Router } from 'express';
import sampleRoutes from './sample';
import userRoutes from './user';
import moviesRoutes from './movies';
import movieListRoutes from './movieList';
import { isLoggedIn } from '../middlewares/isLoggedIn';
const router = Router();
router.use('/sample', sampleRoutes);
router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);
router.use('/movielist', [isLoggedIn], movieListRoutes);

export default router;
