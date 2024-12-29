import { createMiddleware } from 'hono/factory';
import { getCookie } from 'hono/cookie';

const checkTokenMiddleware = createMiddleware(async (c, next) => {
  const accessToken = getCookie(c, 'access_token');
  const refreshToken = getCookie(c, 'refresh_token');

  if (accessToken || refreshToken) {
    return c.redirect('/');
  }

  await next();
});

export default checkTokenMiddleware;
