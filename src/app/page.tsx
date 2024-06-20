import { signOut } from '@/actions/users/signOut';
import PostList from '@/components/posts/PostList';
import Profile from '@/components/profile';
import { SignIn } from '@/components/users/sign-in';
import { SignUp } from '@/components/users/sign-up';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-screen">
      <div className="col-span-1">
        <div>
          <h1 className="text-xl m-2">Trending topics</h1>
        </div>
        <div>
          <h1 className="text-xl m-2">Followed Topics</h1>
        </div>
      </div>
      <div className="col-span-2">
        <PostList />
        <SignIn />
        <form action={signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
      <div className="col-span-1">
        <div>
          <h1 className="text-xl m-2">Trending Posts</h1>
        </div>
        <div>
          <h1 className="text-xl m-2">Recently Viewed Posts</h1>
          {/* <SignUp /> */}
        </div>
      </div>
    </div>
  );
}
