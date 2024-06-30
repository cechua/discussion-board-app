import { fetchAllPostsByUser } from '@/db/queries/posts';
import { notFound } from 'next/navigation';
import PostList from '@/components/posts/PostList';
import { auth } from '@/auth';

const PostsByUserPage = async () => {
  const session = await auth();
  if (!session || !session.user) notFound();
  return (
    <div className="flex flex-col items-center pt-4 pb-16">
      <div className="w-1/2">
        <h1 className="text-xl font-bold mb-4">Your Posts</h1>
        <PostList
          fetchPosts={() => fetchAllPostsByUser(session?.user?.id!)}
          showDeleteButton
        />
      </div>
    </div>
  );
};

export default PostsByUserPage;
