import React from 'react';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';
import { Textarea } from '@nextui-org/react';
import FormButton from '../common/button/FormButton';

interface CommentsCreateFormProps {
  postId: string;
  parentCommentId?: string;
}

const CommentsCreateForm = ({
  postId,
  parentCommentId,
}: CommentsCreateFormProps) => {
  // const [formState, action] = useFormState(
  //   actions.createPost.bind(null, Array.from(selectedKeys)),
  //   {
  //     errors: {},
  //   }
  // );
  return (
    <div>
      <form>
        <Textarea
          name="commentMessage"
          label="Add a comment"
          labelPlacement="outside"
          placeholder="commentMessage"
          // isInvalid={!!formState.errors.commentMessage}
          // errorMessage={formState.errors.commentMessage?.join(', ')}
        />
        <FormButton>Comment</FormButton>
      </form>
    </div>
  );
};

export default CommentsCreateForm;
