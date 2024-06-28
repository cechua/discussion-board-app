'use client';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import CommentCreateForm from './CommentCreateForm';

interface CommentShowFormButtonProps {
  postId: string;
  parentCommentId: string;
}

const CommentShowFormButton = ({
  postId,
  parentCommentId,
}: CommentShowFormButtonProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  return (
    <div>
      <Button
        size="sm"
        onClick={() =>
          setShowCommentForm((showCommentForm) => !showCommentForm)
        }
        color="primary"
        variant="light"
      >
        reply
      </Button>
      {showCommentForm && (
        <div className="pt-4">
          <CommentCreateForm
            postId={postId}
            parentCommentId={parentCommentId}
          />
        </div>
      )}
    </div>
  );
};

export default CommentShowFormButton;
