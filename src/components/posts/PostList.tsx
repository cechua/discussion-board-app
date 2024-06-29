import PostItem from './PostItem';
import { PostWithData } from '@/db/queries/posts';

interface PostListProps {
  fetchPosts: () => Promise<PostWithData[]>;
  isSideContent?: boolean;
}

const PostList = async ({ fetchPosts, isSideContent }: PostListProps) => {
  const posts = await fetchPosts();

  return (
    <div>
      <div className="flex flex-col border-b-1">
        {posts.map((post) => {
          return (
            <PostItem key={post.id} post={post} isSideContent={isSideContent} />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
