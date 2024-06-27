import PostList from '@/components/posts/PostList';
import { fetchPostsByTopic } from '@/db/queries/posts';

interface PostsByTopicPageProps {
  params: {
    slug: string;
  };
}
const PostsByTopicPage = ({ params }: PostsByTopicPageProps) => {
  return (
    <div className="flex flex-col items-center pt-4 row-span-full xl:row-auto col-span-12 xl:col-span-7">
      <div>
        <h1 className="text-2xl font-bold mb-4 h-8 hidden xl:block">
          Posts with <span className="italic font-bold">{params.slug}</span>{' '}
          topic
        </h1>
        <PostList fetchPosts={() => fetchPostsByTopic(params.slug)} />
      </div>
    </div>
  );
};

export default PostsByTopicPage;
