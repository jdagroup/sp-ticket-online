import { Hono } from 'hono';
import { html } from 'hono/html';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';

import googleRoute from './google';

import AuthLayout from '~/views/layout/auth';
import PageLogin from '~/views/pages/auth/login';
import { HonoApp } from '~/types/hono';
import alertWarning from '~/components/alert/warning';
import alertDanger from '~/components/alert/danger';
import { HTTPException } from 'hono/http-exception';
import loginFormSchema from '~/schemas/login-form-schema';
import { ZodError } from 'zod';
import { checkIfUserExistsByEmailWithDetails } from '~/services/user-service';
import { handleUserToken } from '~/utils/token';
import checkTokenMiddleware from '~/middlewares/check-token-middleware';
import { deleteToken } from '~/services/auth-service';

const app = new Hono<HonoApp>()
  .use(checkTokenMiddleware)
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
  .post('/login', async (c) => {
    const body = await c.req.parseBody();

    const email = body['email'];
    const password = body['password'];

    try {
      const validatedBody = loginFormSchema.parse({ email, password });

      const checkedUser = await checkIfUserExistsByEmailWithDetails({
        email: validatedBody.email,
      });

      if (!checkedUser || checkedUser.email !== validatedBody.email) {
        return c.html(
          alertDanger({
            title: 'Login Gagal',
            content: 'Email atau password salah',
          })
        );
      }

      const passwordInDB = checkedUser.password ? checkedUser.password : '';

      const verifiedPassword = await Bun.password.verify(
        validatedBody.password,
        passwordInDB
      );

      if (!verifiedPassword) {
        return c.html(
          alertDanger({
            title: 'Login Gagal',
            content: 'Email atau password salah',
          })
        );
      }

      if (
        !checkedUser.emailVerifiedAt ||
        checkedUser.status === 'waitingConfirmation'
      ) {
        return c.html(
          alertDanger({
            title: 'Login Gagal',
            content: 'Akun belum di aktivasi',
          })
        );
      }

      // Maybe resend confirmation email here

      if (checkedUser.status === 'banned') {
        return c.html(
          alertDanger({
            title: 'Login Gagal',
            content: 'Akun di banned',
          })
        );
      }

      const { accessToken, refreshToken } = await handleUserToken(checkedUser);

      setCookie(c, 'access_token', accessToken, {
        maxAge: 60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      setCookie(c, 'refresh_token', refreshToken, {
        maxAge: 60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      c.header('HX-Redirect', '/');
      return c.body(null);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        const mappedError = html`<ul>
          ${error.errors.map((e) => html`<li>${e.message}</li>`)}
        </ul>`;

        return c.html(
          alertDanger({
            title: 'Login Gagal',
            content: mappedError,
          })
        );
      }

      throw new HTTPException(500);
    }
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
