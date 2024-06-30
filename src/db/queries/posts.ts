import { auth } from '@/auth';
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
  _count: { comments: number };
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
      _count: { select: { comments: true } },
    },
  });
}

export async function fetchAllPostsByUser(
  userId: string
): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { userId: userId },
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

export function fetchPostsByTopic(topicName: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      topics: { some: { topicName: topicName } },
    },
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

export function fetchPostById(postId: string) {
  return db.post.findFirst({
    where: {
      id: postId,
    },
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

export function fetchPostByTerm(searchQuery: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      OR: [
        { title: { contains: searchQuery } },
        { content: { contains: searchQuery } },
        { topics: { some: { topicName: { contains: searchQuery } } } },
      ],
    },
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
