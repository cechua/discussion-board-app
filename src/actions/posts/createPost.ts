'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import type { Post, Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z
    .string()
    .min(10, { message: 'Title must be at least 10 characters long.' })
    .max(50, { message: 'Title is too long. Max of 50 characters only.' }),
  content: z
    .string()
    .min(30, { message: 'Content must be at least 30 characters long.' }),
  topics: z
    .string()
    .array()
    .min(1, { message: 'Please select atleast one topic.' })
    .max(3, { message: 'Max of 3 topics only' }),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    topics?: string[];
    _form?: string[];
  };
}

export async function createPost(
  topics: string[],
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this'],
      },
    };
  }

  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    topics: topics,
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id!,
        topics: {
          connect: topics.map((topidId) => {
            return { id: topidId };
          }),
        },
      },
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
          _form: ['Failed to create post, Please try again.'],
        },
      };
    }
  }

  revalidatePath('/');
  redirect('/');
}
