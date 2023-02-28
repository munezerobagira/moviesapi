import app from './app';
import { PORT, MONGO_URL } from './config';
import { Logger } from './utils';
import mongoose from 'mongoose';
mongoose.connect(MONGO_URL).then(() => {
  Logger.info('connected to db');
});
app.listen(PORT, () => {
  Logger.debug(`Server started on ${PORT}`);
});
