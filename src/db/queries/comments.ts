import type { Comment } from '@prisma/client';
import { db } from '..';
import { cache } from 'react';

export type CommentWithUser = Comment & {
  user: { name: string | null; image: string | null };
};

//cache purpose is to avoid mulitple request with the same value
export const fetchComments = cache(
  (postId: string): Promise<CommentWithUser[]> => {
    return db.comment.findMany({
      where: { postId: postId },
      include: {
        user: { select: { name: true, image: true } },
      },
    });
  }
);
