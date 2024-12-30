import { Hono } from 'hono';
import loginRoute from './login';
import googleRoute from './google';
import checkTokenMiddleware from '~/middlewares/check-token-middleware';
import logoutRoute from './logout';

const app = new Hono()
  .route('/logout', logoutRoute)
  .use(checkTokenMiddleware)
  .route('/login', loginRoute)
  .route('/google', googleRoute);

export default app;
