import PostItem from './PostItem';

const mockPosts = [
  {
    id: 1,
    title: 'Test Title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores corrupti at, quia amet nostrum. In ab amet deleniti tempora id quis, laborum, delectus praesentium ipsa fugit, quae aperiam quibusdam.',
    topics: [
      { name: 'testtopic', bgColor: '3f3ff1', textColor: 'eeeeee' },
      { name: 'extra', bgColor: '87842c', textColor: 'eeeeee' },
    ],
    user: { name: 'testuser1' }, //userId in actual.
    comment_count: 2,
  },
  {
    id: 2,
    title: 'Test Title 2',
    content: 'Just sa sample content 2',
    topics: [
      { name: 'testtopic', bgColor: '3f3ff1', textColor: 'eeeeee' },
      { name: 'testtopic', bgColor: '7e41b2', textColor: 'eeeeee' },
      { name: 'testtopic', bgColor: '7e41b2', textColor: 'eeeeee' },
    ],
    user: { name: 'testuser2' }, //userId in actual.
    comment_count: 1,
  },
  {
    id: 3,
    title: 'Test Title 3',
    content: 'Just sa sample content 3',
    topics: [
      { name: 'testtopic', bgColor: '7e41b2', textColor: 'eeeeee' },
      { name: 'testtopic', bgColor: '3f3ff1', textColor: 'eeeeee' },
    ],
    user: { name: 'testuser2' }, //userId in actual.
    comment_count: 1,
  },
];

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
  fetchPosts?: () => Promise<any[]>;
  isSideContent?: boolean;
}

const PostList = ({ fetchPosts, isSideContent }: PostListProps) => {
  return (
    <div>
      <div className="flex flex-col border-b-1">
        {mockPosts.map((post) => {
          return (
            <PostItem key={post.id} post={post} isSideContent={isSideContent} />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
