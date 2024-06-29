import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function createInitialMockUsers() {
  const user1 = await prisma.user.upsert({
    where: { email: 'george.bluth@reqres.in' },
    update: {},
    create: {
      id: '1',
      email: 'george.bluth@reqres.in',
      name: 'George Bluth',
      image: 'https://reqres.in/img/faces/1-image.jpg',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'janet.weaver@reqres.in' },
    update: {},
    create: {
      id: '2',
      email: 'janet.weaver@reqres.in',
      name: 'Janet Weaver',
      image: 'https://reqres.in/img/faces/2-image.jpg',
    },
  });
  const user3 = await prisma.user.upsert({
    where: { email: 'emma.wong@reqres.in' },
    update: {},
    create: {
      id: '3',
      email: 'emma.wong@reqres.in',
      name: 'Emma Wong',
      image: 'https://reqres.in/img/faces/3-image.jpg',
    },
  });
  const user4 = await prisma.user.upsert({
    where: { email: 'eve.holt@reqres.in' },
    update: {},
    create: {
      id: '4',
      email: 'eve.holt@reqres.in',
      name: 'Eve Holt',
      image: 'https://reqres.in/img/faces/4-image.jpg',
    },
  });
  const user5 = await prisma.user.upsert({
    where: { email: 'charles.morris@reqres.in' },
    update: {},
    create: {
      id: '5',
      email: 'charles.morris@reqres.in',
      name: 'Charles Morris',
      image: 'https://reqres.in/img/faces/5-image.jpg',
    },
  });
  const user6 = await prisma.user.upsert({
    where: { email: 'charles.morris@reqres.in' },
    update: {},
    create: {
      id: '6',
      email: 'charles.morris@reqres.in',
      name: 'Tracey Ramos',
      image: 'https://reqres.in/img/faces/6-image.jpg',
    },
  });
  const user7 = await prisma.user.upsert({
    where: { email: 'michael.lawson@reqres.in' },
    update: {},
    create: {
      id: '7',
      email: 'michael.lawson@reqres.in',
      name: 'Michael Lawson',
      image: 'https://reqres.in/img/faces/7-image.jpg',
    },
  });
  const user8 = await prisma.user.upsert({
    where: { email: 'lindsay.ferguson@reqres.in' },
    update: {},
    create: {
      id: '8',
      email: 'lindsay.ferguson@reqres.in',
      name: 'Lindsay Ferguson',
      image: 'https://reqres.in/img/faces/8-image.jpg',
    },
  });
  const user9 = await prisma.user.upsert({
    where: { email: 'tobias.funke@reqres.in' },
    update: {},
    create: {
      id: '9',
      email: 'tobias.funke@reqres.in',
      name: 'Tobias Funke',
      image: 'https://reqres.in/img/faces/9-image.jpg',
    },
  });
  const user10 = await prisma.user.upsert({
    where: { email: 'byron.fields@reqres.in' },
    update: {},
    create: {
      id: '10',
      email: 'byron.fields@reqres.in',
      name: 'Byron Fields',
      image: 'https://reqres.in/img/faces/10-image.jpg',
    },
  });
}

async function createInitialTopics() {
  await prisma.topic.upsert({
    where: { topicName: 'technology' },
    update: {},
    create: {
      id: '1',
      topicName: 'technology',
      description:
        'Anything tech. web, mobile phones, computers, ai, data science, innovation etc',
      backgroundColor: '2271B3',
      textColor: 'ffffff',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'worldnews' },
    update: {},
    create: {
      id: '2',
      topicName: 'worldnews',
      description: 'News across the world.',
      backgroundColor: 'A52019',
      textColor: 'ffffff',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'food' },
    update: {},
    create: {
      id: '3',
      topicName: 'food',
      description: 'All about food.',
      backgroundColor: 'A12312',
      textColor: 'ffffff',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'sports' },
    update: {},
    create: {
      id: '4',
      topicName: 'sports',
      description: 'All about sports.',
      backgroundColor: '57A639',
      textColor: 'ffffff',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'movies' },
    update: {},
    create: {
      id: '5',
      topicName: 'movies',
      description: 'All about movies.',
      backgroundColor: 'CBD0CC',
      textColor: '000000',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'tvshow' },
    update: {},
    create: {
      id: '6',
      topicName: 'tvshow',
      description: 'All about tv shows.',
      backgroundColor: '922B3E',
      textColor: 'ffffff',
    },
  });
  await prisma.topic.upsert({
    where: { topicName: 'music' },
    update: {},
    create: {
      id: '7',
      topicName: 'music',
      description: 'All about music.',
      backgroundColor: '2A6478',
      textColor: 'ffffff',
    },
  });
}

async function createInitialPostsandComments() {
  const post1 = await prisma.post.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      title: 'Technology is advancing',
      content:
        'Technologies are advancing in an accelerated pace compared to the past centuries. What are your thoughts or any innovation you are excited about?',
      userId: '1',
      topics: {
        connect: [{ id: '1' }, { id: '2' }],
      },
    },
    include: {
      topics: true,
    },
  });
  const comment1 = await prisma.comment.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      postId: post1.id,
      commentMessage: 'Very excited for the upcoming years about tech!',
      userId: '1',
      parentId: null,
    },
  });
  const comment2 = await prisma.comment.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      postId: post1.id,
      commentMessage:
        'Please post more on all the updates about iPhone for the coming years. Cheers',
      userId: '2',
      parentId: null,
    },
  });
  await prisma.comment.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      postId: post1.id,
      commentMessage:
        'Same, Particularly the innovation to automotives and self-driving!',
      userId: '3',
      parentId: comment1.id,
    },
  });
  await prisma.comment.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      postId: post1.id,
      commentMessage: 'Agreed!',
      userId: '4',
      parentId: comment1.id,
    },
  });
}

createInitialMockUsers()
  .then(async () => {
    createInitialTopics();
  })
  .then(async () => {
    createInitialPostsandComments();
  })
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
