import { db } from '..';
import type { Post } from '@prisma/client';

export type PostWithData = Post & {
  topics: {
    id: string;
    topicName: string;
    backgroundColor: string;
    textColor: string;
  }[];
  user: { name: string | null; image: string | null };
};

export function fetchAllPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
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
    },
  });
}
