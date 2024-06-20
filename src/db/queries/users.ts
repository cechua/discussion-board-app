import { db } from '..';

/* auto generated type from a function */
// export type PostWithData = Awaited<
//   ReturnType<typeof fetchPostsByTopic>
// >[number];

export type UserType = {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
  password: string | null;
};

export function fetchUser(email: string): Promise<UserType | null> {
  return db.user.findFirst({
    where: { email: email },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      password: true,
    },
  });
}
