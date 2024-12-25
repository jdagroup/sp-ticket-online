import { sign, verify } from 'hono/jwt';
import type { JWTPayload } from 'hono/utils/jwt/types';
import {
  jwtPayloadSchema,
  type JwtPayload,
} from '../schemas/jwt-payload-schema';
import {
  addToken,
  deleteAllTokensByUserId,
  deleteToken,
} from '../services/auth-service';

const generateAccessToken = async (payload: JWTPayload) => {
  try {
    return await sign(payload, process.env.ACCESS_TOKEN_SECRET as string);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const generateRefreshToken = async (payload: JWTPayload) => {
  try {
    return await sign(payload, process.env.REFRESH_TOKEN_SECRET as string);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const verifyAccessToken = async (token: string) => {
  try {
    return await verify(token, process.env.ACCESS_TOKEN_SECRET as string);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const verifyRefreshToken = async (token: string) => {
  try {
    return await verify(token, process.env.REFRESH_TOKEN_SECRET as string);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const handleTokenReuse = async (token: string) => {
  try {
    const tokenPayload = jwtPayloadSchema.parse(
      await verifyRefreshToken(token)
    );

    await deleteAllTokensByUserId({ userId: tokenPayload.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const handleTokenRefresh = async (token: string, tokenPayload: JwtPayload) => {
  try {
    const payload = {
      id: tokenPayload.id,
      name: tokenPayload.name,
      eo_id: null,
      exp:
        Math.floor(Date.now() / 1000) +
        60 * Number(process.env.ACCESS_TOKEN_EXPIRE_IN_MINUTES),
      iat: Math.floor(Date.now() / 1000),
    };

    const newAccessToken = await generateAccessToken(payload);
    const newRefreshToken = await generateRefreshToken({
      ...payload,
      exp:
        Math.floor(Date.now() / 1000) +
        60 * Number(process.env.REFRESH_TOKEN_EXPIRE_IN_MINUTES),
    });

    await deleteToken({ token: token });
    await addToken({ token: newRefreshToken, userId: tokenPayload.id });

    return { newAccessToken, newRefreshToken };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  handleTokenReuse,
  handleTokenRefresh,
};
