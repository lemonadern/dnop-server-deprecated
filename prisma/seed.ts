import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initRoom = async () => {
  const room1 = await prisma.room.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Room 1',
      description: 'This is Room 1.',
    },
  });

  const room2 = await prisma.room.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Room 2',
      description: 'This is Room 2.',
    },
  });

  console.log('Initializing Room ...');
  console.log({ room1, room2 });
};

const initNumberOfPeople = async () => {
  const numberOfPeople1 = await prisma.numberOfPeople.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      number: 2,
      roomId: 1,
    },
  });

  const numberOfPeople2 = await prisma.numberOfPeople.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      number: 20,
      roomId: 2,
    },
  });

  console.log('Initializing NumberOfPeople ...');
  console.log({ numberOfPeople1, numberOfPeople2 });
};

const main = async () => {
  await initRoom();
  await initNumberOfPeople();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('done! Closing Prisma Client...');
    await prisma.$disconnect();
  });
