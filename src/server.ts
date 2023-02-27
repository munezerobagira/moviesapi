import app from './app';
import { PORT } from './config';
import { Logger } from './util';

app.listen(PORT, () => {
  Logger.debug(`Server started on ${PORT}`);
});
