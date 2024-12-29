import { Hono } from 'hono';
import {
  generateGoogleOAuthURL,
  generateState,
  getGoogleOAuthTokens,
  getGoogleUser,
} from '~/utils/oauth';
import { getCookie, setCookie } from 'hono/cookie';
import { HTTPException } from 'hono/http-exception';
import { addUser, checkIfUserExistsByEmail } from '~/services/user-service';
import { handleUserToken } from '~/utils/token';

const googleRoute = new Hono()
  .get('/', (c) => {
    const scope = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ];

    const state = generateState();

    const googleOAuthURL = generateGoogleOAuthURL({ scope, state });

    setCookie(c, 'google_oauth_state', state, {
      maxAge: 60 * 10, // 10 minutes
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    // Using 'HX-Redirect' so that HTMX 'hx-get' can redirect into another page
    c.header('HX-Redirect', googleOAuthURL);
    return c.body(null);
  })
  .get('/callback', async (c) => {
    const { code, state } = c.req.query();
    const storedState = getCookie(c, 'google_oauth_state');

      if (!code || !state || !storedState || state !== storedState) {
        throw new HTTPException(400);
      }

    try {
      const googleOAuthTokens = await getGoogleOAuthTokens({ code });

      const googleUser = await getGoogleUser({
        accessToken: googleOAuthTokens.access_token,
      });

      const userExists = await checkIfUserExistsByEmail({
        email: googleUser.email,
      });

      if (userExists) {
        const { accessToken, refreshToken } = await handleUserToken(userExists);

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

        return c.redirect('/');
      }

      const addedUser = await addUser({
        name: googleUser.name,
        email: googleUser.email,
        emailVerifiedAt: new Date(),
        status: 'active',
        role: 'user',
      });

      const { accessToken, refreshToken } = await handleUserToken(addedUser);

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

      return c.redirect('/');
    } catch (error) {
      if (error instanceof Error && error.message === 'Response error') {
        throw new HTTPException(400);
      }

      throw new HTTPException(500);
    }
  });

export default googleRoute;
