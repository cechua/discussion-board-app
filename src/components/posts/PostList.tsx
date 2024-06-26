import PostItem from './PostItem';
import { PostWithData } from '@/db/queries/posts';

const mockComments = [
  {
    id: 1,
    comment: 'Comment for Post Id 1',
    postId: 1,
    user: { name: 'testname' }, //userId in actual.
    parentCommentId: null,
  },
  {
    id: 2,
    comment: 'Comment for Comment Id 1',
    postId: 1,
    user: { name: 'testuser' }, //userId in actual.
    parentCommentId: 1,
  },
  {
    id: 3,
    comment: 'Comment #2 for Comment Id 1',
    postId: 1,
    user: { name: 'testuser2' }, //userId in actual.
    parentCommentId: 1,
  },
  {
    id: 4,
    comment: 'Comment #3 for Comment Id 1',
    postId: 1,
    user: { name: 'testuser3' }, //userId in actual.
    parentCommentId: 1,
  },
  {
    id: 5,
    comment: 'Comment # for Post Id 2',
    postId: 1,
    user: { name: 'testuser2' }, //userId in actual.
    parentCommentId: null,
  },
  {
    id: 6,
    comment: 'Comment #2 for Post Id 1',
    postId: 1,
    user: { name: 'testuser2' }, //userId in actual.
    parentCommentId: null,
  },
];

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
