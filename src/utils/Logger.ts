import { createLogger, format, transports } from 'winston';
import fs from 'fs';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';
import { ENVIRONMENT, LOGPATH } from '../config';

const { combine, errors, timestamp, prettyPrint } = format;

let dir = LOGPATH;
if (!LOGPATH) dir = path.resolve('LOGS');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logLevel = ENVIRONMENT === 'development' ? 'debug' : 'warn';

const options = {
  file: {
    level: logLevel,
    filename: dir + '/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: '20m',
    colorize: true,
    maxFiles: '21d',
  },
};

//creates a logger instace and exports it. It logs to a daily rotate file on uncaught exceptions
export default createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      format: combine(errors({ stack: true }), timestamp(), prettyPrint()),
    }),
  ],
  // exceptionHandlers: [new DailyRotateFile(options.file)],
  exitOnError: false, // do not exit on unhandled exceptions
});
