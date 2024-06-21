'use server';

import * as auth from '@/auth';

export async function signInGitHub() {
  return auth.signIn('github');
}

interface SignInCredentialsProps {
  errors: {
    _formError?: string[];
  };
}

export async function signInCredentials(
  formState: SignInCredentialsProps,
  formData: FormData
): Promise<SignInCredentialsProps> {
  return auth.signIn('credentials', formData);
}
