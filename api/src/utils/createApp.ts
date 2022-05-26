import express, { Express } from 'express';
import router from '../routes';
import cors from 'cors';
import session from 'express-session';
import config from '../../config';

const createApp = (): Express => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
  app.use(session(config.session));
  app.use('/', router);
  return app;
};
export default createApp;
