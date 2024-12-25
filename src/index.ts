import { Hono } from 'hono';
import Layout from './views/layout';
import HomeBody from './views/pages/home';
import loginRoute from './routes/login-route';
import logoutRoute from './routes/logout-routes';
import authRote from './routes/auth-route';
import authMiddleware from './middlewares/auth-middleware';

const app = new Hono();

app.get('/', authMiddleware, (c) => {
  const jwtPayload = c.get('jwtPayload');

  return c.html(
    Layout({
      title: 'Home - SP Ticket Online',
      bodyContent: HomeBody(jwtPayload),
    })
  );
});
app.route('/login', loginRoute);
app.route('/logout', logoutRoute);
app.route('/auth', authRote);

export default app;
