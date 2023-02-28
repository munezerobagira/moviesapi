import UserController from '../controllers/User.controller';
import { Router } from 'express';
import asyncHandler from '../utils/AsyncHandler';
import { createUserSchema } from '../validations/user';
import { requestValidator } from '../middlewares';

const router = Router();
router.post('/', [requestValidator(createUserSchema)], asyncHandler(UserController.signup));
router.get('/', asyncHandler(UserController.fetchUsers));
router.delete('/account', asyncHandler(UserController.deleteAccount));
router.patch('/account', asyncHandler(UserController.deleteAccount));
export default router;
