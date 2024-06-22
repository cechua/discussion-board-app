import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { HeartIcon } from '../common/SvgIcons/HeartIcon';

const mockPosts = [
  {
    id: 1,
    title: 'Test Title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores corrupti at, quia amet nostrum. In ab amet deleniti tempora id quis, laborum, delectus praesentium ipsa fugit, quae aperiam quibusdam.',
    topics: [
      { name: 'testtopic', bgColor: 'bg-stone-800', textColor: 'text-white' },
      { name: 'extra', bgColor: 'bg-yellow-800', textColor: 'text-white' },
    ],
    user: { name: 'testuser1' }, //userId in actual.
    comment_count: 2,
  },
  {
    id: 2,
    title: 'Test Title 2',
    content: 'Just sa sample content 2',
    topics: [
      { name: 'testtopic', bgColor: 'bg-stone-800', textColor: 'text-white' },
      { name: 'testtopic', bgColor: 'bg-amber-800', textColor: 'text-white' },
    ],
    user: { name: 'testuser2' }, //userId in actual.
    comment_count: 1,
  },
  {
    id: 3,
    title: 'Test Title 3',
    content: 'Just sa sample content 3',
    topics: [
      { name: 'testtopic', bgColor: 'bg-orange-800', textColor: 'text-white' },
      { name: 'testtopic', bgColor: 'bg-stone-800', textColor: 'text-white' },
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

const PostList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="flex flex-col gap-2 border-b-1">
        {mockPosts.map((post) => {
          return (
            <div key={post.id} className="border-t-1 p-1">
              <Link
                href={`/posts/${post.id}`}
                className="flex flex-col hover:bg-gray-200 p-2 rounded-md min-h-32 justify-between"
              >
                {/*TODO: Move to a component to reuse on post show */}
                <div className="flex flex-col mb-2">
                  <div className="flex gap-4 items-center">
                    <h3 className="font-bold text-lg">{post.title}</h3>
                    {/*TODO: Change this to avatar of user and component to be reused*/}
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>{' '}
                      <span className="text-sm">{post.user.name}</span>
                    </div>
                    <span className="text-sm">1h ago</span>
                    <ul className="flex gap-1">
                      {post.topics.map((topic, i) => {
                        return (
                          <li key={i}>
                            <Chip
                              size="sm"
                              classNames={{
                                base: topic.bgColor,
                                content: topic.textColor,
                              }}
                            >
                              {topic.name}
                            </Chip>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <p className="flex-1">{post.content}</p>
                <p>2 comments</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
