import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import { setupSwagger } from '../docs';
import { notFoundHandler, errorHandler } from './utils/requestHandler';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
setupSwagger(app);
app.use('*', notFoundHandler);
app.use(errorHandler);

export default app;
