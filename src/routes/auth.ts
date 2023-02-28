import UserController from '../controllers/User.controller';
import { Router } from 'express';
import asyncHandler from '../utils/AsyncHandler';
import { createUserSchema, loginSchema } from '../validations/user';
import { requestValidator } from '../middlewares';

const router = Router();
router.post('/signup', [requestValidator(createUserSchema)], asyncHandler(UserController.signup));
router.post('/login', [requestValidator(loginSchema)], asyncHandler(UserController.login));
export default router;
