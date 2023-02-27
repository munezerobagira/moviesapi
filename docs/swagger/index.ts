import { Express } from 'express';
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument } = require('./swagger.ts');

export default function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
