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
import { addToken } from '~/services/auth-service';
import { generateAccessToken, generateRefreshToken } from '~/utils/token';

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
  try {
    const { code, state } = c.req.query();
    const storedState = getCookie(c, 'google_oauth_state');

    if (!code || !state || !storedState || state !== storedState) {
      throw new HTTPException(400);
    }

    const googleOAuthTokens = await getGoogleOAuthTokens({ code });

    if ('error' in googleOAuthTokens) {
      throw new HTTPException(400);
    }

    const googleUser = await getGoogleUser({
      accessToken: googleOAuthTokens.access_token,
    });

    if ('error' in googleUser) {
      throw new HTTPException(400);
    }

    const userExists = await checkIfUserExistsByEmail({
      email: googleUser.email,
    });

    if (userExists) {
      const payload = {
        id: userExists.id,
        name: userExists.name,
        eo_id: null,
        exp:
          Math.floor(Date.now() / 1000) +
          60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
        iat: Math.floor(Date.now() / 1000),
      };

      const accessToken = await generateAccessToken(payload);

      const refreshToken = await generateRefreshToken({
        ...payload,
        exp:
          Math.floor(Date.now() / 1000) +
          60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
      });

      await addToken({ token: refreshToken, userId: userExists.id });

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

    const payload = {
      id: addedUser.id,
      name: addedUser.name,
      eo_id: null,
      exp:
        Math.floor(Date.now() / 1000) +
        60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
      iat: Math.floor(Date.now() / 1000),
    };

    const accessToken = await generateAccessToken(payload);

    const refreshToken = await generateRefreshToken({
      ...payload,
      exp:
        Math.floor(Date.now() / 1000) +
        60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
    });

    await addToken({ token: refreshToken, userId: addedUser.id });

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
    throw new HTTPException(500);
  }
});

export default googleRoute;
