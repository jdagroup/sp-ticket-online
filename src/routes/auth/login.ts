import { Hono } from 'hono';
import { html } from 'hono/html';
import { setCookie } from 'hono/cookie';
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

const loginRoute = new Hono<HonoApp>()
  .get('/', (c) => {
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
  .post('/', async (c) => {
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

      if (checkedUser.role === 'user') {
        c.header('HX-Redirect', '/');
      } else if (checkedUser.role === 'organizer') {
        c.header('HX-Redirect', '/eo');
      } else if (
        checkedUser.role === 'admin' ||
        checkedUser.role === 'superadmin'
      ) {
        c.header('HX-Redirect', '/admin');
      }
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
  });

export default loginRoute;
