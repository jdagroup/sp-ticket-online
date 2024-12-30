import { Hono } from 'hono';
import { deleteCookie, getCookie } from 'hono/cookie';
import { deleteToken } from '~/services/auth-service';

const logoutRoute = new Hono()
  .get('/', async (c) => {
  const accessToken = getCookie(c, 'access_token');
  const refreshToken = getCookie(c, 'refresh_token');

  if (accessToken) {
    deleteCookie(c, 'access_token');
  }

  if (refreshToken) {
    try {
      await deleteToken({ token: refreshToken });
      deleteCookie(c, 'refresh_token');
    } catch (error: unknown) {
      deleteCookie(c, 'refresh_token');
    }
  }

  // Using 'HX-Redirect' so that HTMX 'hx-get' can redirect into another page
  c.header('HX-Redirect', '/auth/login');
  return c.body(null);
});

export default logoutRoute;
