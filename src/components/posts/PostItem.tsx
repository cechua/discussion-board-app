'use client';

import Link from 'next/link';
import { Button, Chip, useDisclosure } from '@nextui-org/react';
import { HeartIcon } from '../common/SvgIcons/HeartIcon';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import PostModal from './PostModal';
interface PostItemProps {
  post: any /*Change to Post type once db is created */;
  isSideContent?: boolean;
}

const PostItem = ({ post, isSideContent }: PostItemProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const mainContentPostSummary = (
    <>
      <div className="flex flex-col hover:bg-gray-200 rounded-md min-h-32 justify-between p-0 py-2 xl:p-2">
        <div className="flex flex-col">
          <div className="flex flex-col items-start xl:flex-row xl:items-center xl:gap-4">
            <h3
              className="font-bold text-lg hover:cursor-pointer"
              onClick={onOpen}
            >
              {post.title}
            </h3>
            <div className="flex gap-4 items-center">
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
        </div>

        <p className="flex-1 hover:cursor-pointer pt-2" onClick={onOpen}>
          {post.content}
        </p>
        <p onClick={onOpen}>2 comments</p>
      </div>
      <PostModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        post={post}
      />
    </>
  );

  const sideContentPostSummary = (
    <div className="flex flex-col hover:bg-gray-100 p-2 rounded-md min-h-20 justify-between">
      <div className="flex flex-col pb-2">
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
