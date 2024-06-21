'use server';

import * as auth from '@/auth';

export async function signInGitHub() {
  return auth.signIn('github');
}
