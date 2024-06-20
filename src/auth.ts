import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { fetchUser } from './db/queries/users';
import { isSamePass } from './utils/hashPass';

export const { handlers, signIn, signOut, auth } = NextAuth({
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
  ],
});
