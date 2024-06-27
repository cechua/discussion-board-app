import { fetchPostById } from '@/db/queries/posts';
import { notFound } from 'next/navigation';
import PostShow from '@/components/posts/PostShow';
interface PostByIdPageProps {
  params: {
    postId: string;
  };
}
const PostByIdPage = async ({ params }: PostByIdPageProps) => {
  const post = await fetchPostById(params.postId);

  if (!post) notFound();
  return <PostShow post={post} />;
};

export default PostByIdPage;
