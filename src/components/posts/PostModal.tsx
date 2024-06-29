'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import { PostWithData } from '@/db/queries/posts';
import TopicChip from '../common/TopicChip';

interface PostModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  post: PostWithData;
  handleRedirectToPost: (postId: string) => void;
}

const PostModal = ({
  isOpen,
  onOpenChange,
  post,
  handleRedirectToPost,
}: PostModalProps) => {
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
          footer: 'justify-start',
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">
              <h3
                className="font-bold text-lg capitalize hover:underline cursor-pointer"
                onClick={() => handleRedirectToPost(post.id)}
              >
                {post.title}
              </h3>
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
          <ModalFooter>
            <Button
              className="text-center w-1/6 border-2 rounded-full border-primary-300 text-primary-500 bg-transparent hover:bg-primary-300 hover:text-white"
              onClick={() => handleRedirectToPost(post.id)}
            >
              <span>{post._count.comments} comments</span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
