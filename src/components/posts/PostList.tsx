const mockPosts = [
  {
    id: 1,
    title: 'Test Title',
    content: 'Just sa sample content',
    topic: 'testtopic',
    user: 'anewuser',
    comments: [
      {
        id: 1,
        message: 'a comment',
        user: 'seconduser',
      },
    ],
  },
];

const PostList = () => {
  return <div>PostList</div>;
};

export default PostList;
