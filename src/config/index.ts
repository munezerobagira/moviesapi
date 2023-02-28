import 'dotenv/config';
import path from 'path';
import { getValueWithDefault } from '../utils/getValueWithDefault';
export const LOGPATH = path.resolve('logs');
export const PORT = getValueWithDefault(Number(process.env.PORT), 5000);
export const ENVIRONMENT = getValueWithDefault(process.env.NODE_ENV, 'development');
export const MONGO_URL = getValueWithDefault(process.env['MONGO_URL_' + ENVIRONMENT.toUpperCase()], '');
export const SECRET = getValueWithDefault(process.env.SECRET_KEY, 'secret');
