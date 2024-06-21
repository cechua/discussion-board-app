'use client';

import {
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { SignIn } from './signInForm';
import { authProviders } from '@/enums/authproviders';

export default function HeaderProfile() {
  const session = useSession();

  const signOutHandler = async () => {
    await signOut();
  };

  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <Button onClick={() => signOutHandler()}>Sign Out</Button>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>Login</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-8">
              {/* <h6 className="w-full text-center border-b border-solid border-black leading-[0] my-4">
                <span className="px-4 bg-white text-black">or</span>
              </h6> */}
              <SignIn provider={authProviders.GITHUB} />
            </div>
          </PopoverContent>
        </Popover>
      </>
    );
  }

  return authContent;
}
