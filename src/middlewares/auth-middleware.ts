import { createMiddleware } from 'hono/factory';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { checkIfTokenExists, deleteToken } from '~/services/auth-service';
import {
  jwtPayloadSchema,
  type JwtPayload,
} from '~/schemas/jwt-payload-schema';
import {
  handleTokenRefresh,
  handleTokenReuse,
  verifyAccessToken,
  verifyRefreshToken,
} from '~/utils/token';
import { Session } from 'hono-sessions';

type Props = {
  jwtPayload: JwtPayload;
  message: string;
  session: Session<Record<string, any>>;
};

const authMiddleware = createMiddleware<{
  Variables: Props;
}>(async (c, next) => {
  const accessToken = getCookie(c, 'access_token');
  const refreshToken = getCookie(c, 'refresh_token');

  const needAuthAlert = {
    variant: "warning",
    title: "Akses Tidak Diizinkan",
    content: "Silahkan login untuk melanjutkan"
  };
  const session = c.get("session");
  session.flash("alert", needAuthAlert);

  let jwtPayload;

  if (!accessToken) {
    if (!refreshToken) {
      return c.redirect('/auth/login');
    }

    deleteCookie(c, 'refresh_token');

    const foundToken = await checkIfTokenExists({ token: refreshToken });

    // Detected refresh token reuse!
    if (!foundToken) {
      try {
        await handleTokenReuse(refreshToken);

        return c.redirect('/auth/login');
      } catch (error) {
        return c.redirect('/auth/login');
      }
    }

    try {
      jwtPayload = jwtPayloadSchema.parse(
        await verifyRefreshToken(refreshToken)
      );

      if (foundToken.user.name !== jwtPayload.name) {
        return c.redirect('/auth/login');
      }

      const { newAccessToken, newRefreshToken } = await handleTokenRefresh(
        refreshToken,
        jwtPayload
      );

      setCookie(c, 'access_token', newAccessToken, {
        maxAge: 60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      setCookie(c, 'refresh_token', newRefreshToken, {
        maxAge: 60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      c.set('jwtPayload', jwtPayload);

      await next();
    } catch (error) {
      await deleteToken({ token: refreshToken });
      return c.redirect('/auth/login');
    }
  } else {
    try {
      jwtPayload = jwtPayloadSchema.parse(await verifyAccessToken(accessToken));
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message === `token (${accessToken}) expired`
      ) {
        if (!refreshToken) {
          return c.redirect('/auth/login');
        }

        deleteCookie(c, 'refresh_token');

        const foundToken = await checkIfTokenExists({
          token: refreshToken,
        });

        // Detected refresh token reuse!
        if (!foundToken) {
          try {
            await handleTokenReuse(refreshToken);

            return c.redirect('/auth/login');
          } catch (error) {
            return c.redirect('/auth/login');
          }
        }

        try {
          jwtPayload = jwtPayloadSchema.parse(
            await verifyRefreshToken(refreshToken)
          );

          if (foundToken.user.name !== jwtPayload.name) {
            return c.redirect('/auth/login');
          }

          const { newAccessToken, newRefreshToken } = await handleTokenRefresh(
            refreshToken,
            jwtPayload
          );

          setCookie(c, 'access_token', newAccessToken, {
            maxAge: 60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
          });

          setCookie(c, 'refresh_token', newRefreshToken, {
            maxAge: 60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
          });

          c.set('jwtPayload', jwtPayload);

          await next();
        } catch (error) {
          await deleteToken({ token: refreshToken });
          return c.redirect('/auth/login');
        }
      }
      deleteCookie(c, 'access_token');
      return c.redirect('/auth/login');
    }

    c.set('jwtPayload', jwtPayload);

    await next();
  }
});

export default authMiddleware;
