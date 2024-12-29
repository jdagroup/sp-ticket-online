import prismaClient from '../libs/prismaClient';
import { userStatus, userRole } from '@prisma/client';
import { nanoid } from 'nanoid';

const checkIfUserExistsByEmail = async ({ email }: { email: string }) => {
  try {
    return await prismaClient.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const checkIfUserExistsByEmailWithDetails = async ({
  email,
}: {
  email: string;
}) => {
  try {
    return await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const addUser = async ({
  name,
  email,
  password,
  emailVerifiedAt,
  status,
  role,
}: {
  name: string;
  email: string;
  password?: string;
  emailVerifiedAt?: Date;
  status: userStatus;
  role: userRole;
}) => {
  try {
    const id = `user-${nanoid(16)}`;

    let hashedPassword;

    if (password) {
      hashedPassword = await Bun.password.hash(password, {
        algorithm: 'bcrypt',
        cost: 10,
      });
    }

    return await prismaClient.user.create({
      data: {
        id,
        name,
        email,
        password: hashedPassword || null,
        emailVerifiedAt: emailVerifiedAt || null,
        status,
        role,
      },
      select: {
        id: true,
        name: true,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

export {
  checkIfUserExistsByEmail,
  checkIfUserExistsByEmailWithDetails,
  addUser,
};
