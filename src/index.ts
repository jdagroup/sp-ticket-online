import { Hono } from 'hono';
import Layout from './views/layout';
import HomeBody from './views/pages/home';

const app = new Hono();

app.get('/', (c) => {
  return c.html(
    Layout({ title: 'Home - SP Ticket Online', bodyContent: HomeBody() })
  );
});

export default app;
