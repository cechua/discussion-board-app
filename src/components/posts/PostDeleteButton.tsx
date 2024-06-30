'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import FormButton from '../common/button/FormButton';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { DeleteIcon } from '../common/SvgIcons/DeleteIcon';
interface PostDeleteButtonProps {
  postId: string;
}

const PostDeleteButton = ({ postId }: PostDeleteButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, action] = useFormState(
    actions.deletePost.bind(null, postId),
    {
      errors: {},
    }
  );

  return (
    <>
      <div className="flex flex-wrap justify-end">
        <Button
          variant="light"
          onPress={onOpen}
          className="capitalize"
          isIconOnly
        >
          <DeleteIcon filled fill="red" />
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col "></ModalHeader>
              <ModalBody className="flex justify-center pt-4">
                <p>Are you sure you want to delete this post?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <form action={action}>
                  <FormButton color="danger">Delete</FormButton>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostDeleteButton;
