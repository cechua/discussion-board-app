'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface DeletePostFormState {
  errors: {
    _form?: string[];
  };
}

export async function deletePost(postId: string): Promise<DeletePostFormState> {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return {
        errors: {
          _form: ['You must be signed in to do this'],
        },
      };
    }

    await db.post.delete({
      where: { id: postId, userId: session.user?.id },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Failed to delete post, Please try again.'],
        },
      };
    }
  }
  revalidatePath('/');
  redirect('/');
}
