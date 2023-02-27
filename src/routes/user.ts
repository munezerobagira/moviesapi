import UserController from '../controllers/User.controller';
import { Router } from 'express';
import asyncHandler from '../util/AsyncHandler';
import { createUserSchema } from '../validations/user';
import { requestValidator } from '../middlewares';

const router = Router();
router.post('/', [requestValidator(createUserSchema)], asyncHandler(UserController.signup));
router.get('/', asyncHandler(UserController.fetchUsers));
export default router;
