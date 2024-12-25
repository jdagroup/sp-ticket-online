import { Hono } from 'hono';
import Layout from '../views/layout';
import LoginBody from '../views/pages/login';

const loginRoute = new Hono();

loginRoute.get('/', (c) => {
  return c.html(Layout({ title: 'Login', bodyContent: LoginBody() }));
});

export default loginRoute;
