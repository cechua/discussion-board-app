'use client';

import { useSession } from 'next-auth/react';

/*TODO: Delete this file. This is for session checking only. */
export default function Profile() {
  const session = useSession();

  if (session.status === 'loading') {
    return <div>loading....</div>;
  }

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)}</div>;
  }

  return <div>From client: user is NOT signed in</div>;
}
