import PostItem from './PostItem';
import { PostWithData } from '@/db/queries/posts';

interface PostListProps {
  fetchPosts: () => Promise<PostWithData[]>;
  isSideContent?: boolean;
  showDeleteButton?: boolean;
}

const PostList = async ({
  fetchPosts,
  isSideContent,
  showDeleteButton,
}: PostListProps) => {
  const posts = await fetchPosts();

  if (posts.length == 0) {
    return (
      <div className="flex justify-center border-t-1">
        <p className="text-xl font-bold pt-4">No posts found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col border-b-1">
        {posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              post={post}
              isSideContent={isSideContent}
              showDeleteButton={showDeleteButton}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
