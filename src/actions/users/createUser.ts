'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth } from '@/auth';
import { db } from '@/db';
import { signUpSchema } from '@/utils/validations';
import { hashPass } from '@/utils/hashPass';
import { UserType } from '@/db/queries/users';

interface CreateUserFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function createUser(
  formState: CreateUserFormState,
  formData: FormData
): Promise<CreateUserFormState> {
  const result = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const existingEmail = await db.user.findFirst({
    where: { email: result.data.email },
  });

  if (existingEmail) {
    return {
      errors: {
        _form: ['Email already in use.'],
      },
    };
  }

  let newUser: UserType;
  try {
    newUser = await db.user.create({
      data: {
        email: result.data.email,
        password: await hashPass(result.data.password),
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
          _form: ['Failed to create user'],
        },
      };
    }
  }

  //TODO: Change to paths and not hardcoded.
  redirect('/');
}
