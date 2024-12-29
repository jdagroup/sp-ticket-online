import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

async function main() {
  const id = `user-${nanoid((16))}`;

  const hashedPassword = await Bun.password.hash('password', {
    algorithm: 'bcrypt',
    cost: 10,
  });

  // Create a new user
  const user = await prisma.user.upsert({
    where: { email: 'eo@email.com' },
    update: {},
    create: {
      id,
      email: 'eo@email.com',
      name: 'Event Official',
      emailVerifiedAt: new Date(),
      password: hashedPassword,
      status: 'active',
      role: 'organizer'
    },
  });

  console.log('User created:', user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
