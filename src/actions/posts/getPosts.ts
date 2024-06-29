'use server';

import { db } from '@/db';

export async function getPostsByIds(ids: string[]) {
  return db.post.findMany({
    where: { id: { in: ids } },
    include: {
      topics: {
        select: {
          id: true,
          topicName: true,
          backgroundColor: true,
          textColor: true,
        },
      },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
  });
}
