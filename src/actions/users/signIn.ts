'use server';

import * as auth from '@/auth';
import { authProviders } from '@/enums/authproviders';

export async function signInGitHub() {
  return auth.signIn(authProviders.GITHUB);
}

export async function signInGoogle() {
  return auth.signIn(authProviders.GOOGLE);
}
