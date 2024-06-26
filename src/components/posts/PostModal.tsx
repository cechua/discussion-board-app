'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import Link from 'next/link';
import { PostWithData } from '@/db/queries/posts';
import TopicChip from '../common/TopicChip';

interface PostModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  post: PostWithData;
}

const PostModal = ({ isOpen, onOpenChange, post }: PostModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        placement="center"
        classNames={{
          base: 'min-h-96 max-h-[48rem] overflow',
          header: 'flex justify-center',
          body: 'border-y-2',
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">
              <Link href={`/posts/${post.id}`}>
                <h3 className="font-bold text-lg capitalize hover:underline cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <AvatarIconWithUser
                imageSrc={post.user.image || ''}
                userName={post.user.name || ''}
              />
              <span className="text-sm">1h ago</span>
            </div>
            <ul className="flex gap-1">
              {post.topics.map((topic) => {
                return (
                  <li key={topic.id}>
                    <TopicChip
                      name={topic.topicName}
                      bgColor={topic.backgroundColor}
                      textColor={topic.textColor}
                    />
                  </li>
                );
              })}
            </ul>
          </ModalHeader>
          <ModalBody>
            <section>{post.content}</section>
          </ModalBody>
          <ModalFooter>{/*Add comment component here */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
