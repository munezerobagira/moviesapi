import 'dotenv/config';
import path from 'path';
export const PORT = process.env.PORT || 5000;
export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const LOGPATH = path.resolve('LOGS');
export const MONGO_URL = process.env.MONGO_URL + ENVIRONMENT.toUpperCase();
