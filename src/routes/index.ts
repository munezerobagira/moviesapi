import { Router } from 'express';
import sampleRoutes from './sample';
const router = Router();
router.use('/sample', sampleRoutes);
export default router;
