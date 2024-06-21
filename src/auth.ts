import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { fetchUser } from './db/queries/users';
import { isSamePass } from './utils/hashPass';
import Github from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error('Missing github oauth credentials');
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        // logic to verify if user exists
        user = await fetchUser(credentials.email as string);
        if (!user) {
          //throw new Error('User not found.');
          console.log('User not found, Handle error message here!!');
        } else {
          const validPassword = await isSamePass(
            credentials.password as string,
            user.password as string
          );
          if (validPassword) {
            return user;
          } else {
            console.log('incorrect password');
          }
        }
        // return user object with the their profile data
        return user;
      },
    }),
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});
