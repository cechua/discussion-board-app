'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { auth } from '@/auth';
import { db } from '@/db';

const createCommentSchema = z.object({
  commentMessage: z.string().min(10).max(100),
});

interface CreateCommentFormState {
  errors: {
    commentMessage?: string[];
    _form?: string[];
  };
  resetKey?: string;
}

export async function createComment(
  { postId, parentCommentId }: { postId: string; parentCommentId?: string },
  formState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const result = createCommentSchema.safeParse({
    commentMessage: formData.get('commentMessage'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must sign in to do this.'],
      },
    };
  }

  try {
    await db.comment.create({
      data: {
        commentMessage: result.data.commentMessage,
        postId: postId,
        parentId: parentCommentId ?? null,
        userId: session.user.id!,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong...'],
        },
      };
    }
  }

  revalidatePath(`/posts/${postId}`);
  return {
    errors: {},
    resetKey: postId,
  };
}
