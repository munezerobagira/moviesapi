import { Router } from 'express';
import sampleRoutes from './sample';
import userRoutes from './user';
const router = Router();
router.use('/sample', sampleRoutes);
router.use('/users', userRoutes);

export default router;
