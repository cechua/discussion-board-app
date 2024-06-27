'use client';

import Link from 'next/link';
import { useDisclosure } from '@nextui-org/react';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import PostModal from './PostModal';
import TopicChip from '../common/TopicChip';
import { PostWithData } from '@/db/queries/posts';
import type { Topic } from '@prisma/client';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
interface PostItemProps {
  post: PostWithData;
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
              className="font-bold text-lg capitalize hover:cursor-pointer"
              onClick={onOpen}
            >
              {post.title}
            </h3>
            <div className="flex gap-2 flex-col xl:flex-row xl:items-center">
              <div className="flex gap-4 items-center">
                <AvatarIconWithUser
                  imageSrc={post.user.image || ''}
                  userName={post.user.name || ''}
                />
                <span className="text-sm">
                  {dayjs(post.createdAt).fromNow()}
                </span>
              </div>
              <ul className="flex gap-1 flex-1">
                {post.topics.map((topic) => {
                  return (
                    <li key={topic.id}>
                      <Link href={`/topics/${topic.topicName}`}>
                        <TopicChip
                          name={topic.topicName}
                          bgColor={topic.backgroundColor}
                          textColor={topic.textColor}
                        />
                      </Link>
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
      <PostModal isOpen={isOpen} onOpenChange={onOpenChange} post={post} />
    </>
  );

  const sideContentPostSummary = (
    <div className="flex flex-col hover:bg-gray-100 p-2 rounded-md min-h-20 justify-between">
      <div className="flex flex-col pb-2">
        <div className="flex flex-col gap-2">
          <Link href={`/posts/${post.id}`}>
            <h3 className="font-bold text-lg capitalize hover:underline">
              {post.title}
            </h3>
          </Link>
          <ul className="flex gap-1">
            {post.topics.map((topic) => {
              return (
                <li key={topic.id}>
                  <Link href={`/topics/${topic.topicName}`}>
                    <TopicChip
                      name={topic.topicName}
                      bgColor={topic.backgroundColor}
                      textColor={topic.textColor}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2 items-center">
            <AvatarIconWithUser
              imageSrc={post.user.image || ''}
              userName={post.user.name || ''}
            />
            <span className="text-sm">{dayjs(post.createdAt).fromNow()}</span>
          </div>
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
