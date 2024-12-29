import { Hono } from 'hono';
import { html } from 'hono/html';
import { deleteCookie, getCookie } from 'hono/cookie';

import googleRoute from './google';

import AuthLayout from '~/views/layout/auth';
import PageLogin from '~/views/pages/auth/login';
import { HonoApp } from '~/types/hono';
import alertWarning from '~/components/alert/warning';
import alertDanger from '~/components/alert/danger';
import { deleteToken } from '~/services/auth-service';

const app = new Hono<HonoApp>()
  .get('/login', (c) => {
    const session = c.get('session');
    const alertSession = session.get('alert');

    return c.html(
      AuthLayout({
        title: 'Login',
        bodyContent: PageLogin({
          _alert: alertSession ? alertWarning(alertSession) : html``,
        }),
      })
    );
  })
  .post('/login', (c) => {
    return c.html(
      alertDanger({
        title: 'Login Gagal',
        content: 'Username/Password salah',
      })
    );
  })
  .get('/logout', async (c) => {
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
  })
  .route('/google', googleRoute);

export default app;
