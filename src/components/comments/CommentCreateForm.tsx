'use client';
import React from 'react';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';
import { Textarea } from '@nextui-org/react';
import FormButton from '../common/button/FormButton';

interface CommentCreateFormProps {
  postId: string;
  parentCommentId?: string;
}

const CommentCreateForm = ({
  postId,
  parentCommentId,
}: CommentCreateFormProps) => {
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentCommentId }),
    {
      errors: {},
    }
  );
  return (
    <div>
      <form
        action={action}
        className="flex flex-col gap-2"
        noValidate
        key={formState.resetKey} //used to reset the form, reset key returned from server action
      >
        <Textarea
          name="commentMessage"
          label="Add a comment:"
          labelPlacement="outside"
          placeholder=""
          isInvalid={!!formState.errors.commentMessage}
          errorMessage={formState.errors.commentMessage?.join(', ')}
        />

        {formState.errors._form && formState.errors._form.length > 0 ? (
          <div className="rounded px-4 py-2 bg-red-200 border border-red-400 w-fit">
            {formState.errors._form.join(', ')}
          </div>
        ) : null}

        <FormButton classNames="w-36" color="primary" variant="ghost">
          Comment
        </FormButton>
      </form>
    </div>
  );
};

export default CommentCreateForm;
