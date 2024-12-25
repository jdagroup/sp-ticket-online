import prismaClient from '../libs/prismaClient';

const checkIfTokenExists = async ({ token }: { token: string }) => {
  try {
    const foundToken = await prismaClient.authentication.findUnique({
      where: {
        token,
      },
      select: {
        token: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!foundToken) {
      return false;
    }

    return foundToken;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const addToken = async ({
  token,
  userId,
}: {
  token: string;
  userId: string;
}) => {
  try {
    await prismaClient.authentication.create({
      data: {
        token,
        userId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const deleteToken = async ({ token }: { token: string }) => {
  try {
    await prismaClient.authentication.delete({
      where: {
        token,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const deleteAllTokensByUserId = async ({ userId }: { userId: string }) => {
  try {
    await prismaClient.authentication.deleteMany({
      where: {
        userId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

export { checkIfTokenExists, addToken, deleteToken, deleteAllTokensByUserId };
