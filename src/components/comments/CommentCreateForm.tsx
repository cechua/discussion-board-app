import React from 'react';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';
import { Textarea } from '@nextui-org/react';
import FormButton from '../common/button/FormButton';

interface CommentCreateFormProps {
  postId: string;
  parentCommentId?: string;
  isChild?: boolean;
}

const CommentCreateForm = ({
  postId,
  parentCommentId,
  isChild,
}: CommentCreateFormProps) => {
  // const [formState, action] = useFormState(
  //   actions.createPost.bind(null, Array.from(selectedKeys)),
  //   {
  //     errors: {},
  //   }
  // );
  return (
    <div>
      <form className="flex flex-col gap-2">
        <Textarea
          name="commentMessage"
          label="Add a comment:"
          labelPlacement="outside"
          placeholder=""
          // isInvalid={!!formState.errors.commentMessage}
          // errorMessage={formState.errors.commentMessage?.join(', ')}
        />
        <FormButton classNames="w-36" color="primary" variant="ghost">
          Comment
        </FormButton>
      </form>
    </div>
  );
};

export default CommentCreateForm;
