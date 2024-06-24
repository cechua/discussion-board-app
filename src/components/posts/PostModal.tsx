'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
} from '@nextui-org/react';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import Link from 'next/link';

interface PostModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  post: any /*change to Post*/;
}

const PostModal = ({ isOpen, onOpen, onOpenChange, post }: PostModalProps) => {
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
                <h3 className="font-bold text-lg hover:underline cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <AvatarIconWithUser imageSrc="" userName={post.user.name} />
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
