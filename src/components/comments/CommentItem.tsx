import { fetchComments } from '@/db/queries/comments';
import React from 'react';
import CommentCreateForm from './CommentCreateForm';
import AvatarIconWithUser from '../common/AvatarIconWithUser';
import DateCreatedLabel from '../common/DateCreatedLabel';
import CommentShowFormButton from './CommentShowFormButton';

interface CommentItemProps {
  commentId: string;
  postId: string;
}

const CommentItem = async ({ commentId, postId }: CommentItemProps) => {
  const comments = await fetchComments(postId);
  const comment = comments.find((c) => c.id === commentId);
  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentItem key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <AvatarIconWithUser
            imageSrc={comment.user.image || ''}
            userName={comment.user.name || ''}
          />
          <DateCreatedLabel date={comment.createdAt} />
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-gray-900">{comment.commentMessage}</p>

          <CommentShowFormButton
            postId={comment.postId}
            parentCommentId={comment.id}
          />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
};

export default CommentItem;
