import Link from 'next/link';
import { Button, Chip } from '@nextui-org/react';
import { HeartIcon } from '../common/SvgIcons/HeartIcon';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
interface PostItemProps {
  post: any /*Change to Post type once db is created */;
  isSideContent?: boolean;
}

const PostItem = ({ post, isSideContent }: PostItemProps) => {
  const mainContentPostSummary = (
    <Link
      href={`/posts/${post.id}`}
      className="flex flex-col hover:bg-gray-200 p-2 rounded-md min-h-32 justify-between"
    >
      <div className="flex flex-col mb-2">
        <div className="flex gap-4 items-center">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <AvatarIconWithUser imageSrc="" userName={post.user.name} />
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
  );

  const sideContentPostSummary = (
    <div className="flex flex-col hover:bg-gray-100 p-2 rounded-md min-h-20 justify-between">
      <div className="flex flex-col mb-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <Link href={`/posts/${post.id}`}>
              <h3 className="font-bold text-lg hover:underline">
                {post.title}
              </h3>
            </Link>

            {/*TODO: Change this to avatar of user and component to be reused*/}
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>{' '}
              <span className="text-sm">{post.user.name}</span>
            </div>
            <span className="text-sm">1h ago</span>
          </div>
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
    </div>
  );

  return (
    <div key={post.id} className="border-t-1 p-1">
      {!isSideContent ? mainContentPostSummary : sideContentPostSummary}
    </div>
  );
};

export default PostItem;
