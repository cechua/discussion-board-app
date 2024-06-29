import { fetchComments } from '@/db/queries/comments';
import CommentItem from './CommentItem';

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchComments(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <div className="my-4">
      <h1 className="text-md font-bold">{comments.length} comments</h1>
      <ul>
        {topLevelComments.map((comment) => (
          <CommentItem
            postId={comment.postId}
            commentId={comment.id}
            key={comment.id}
          />
        ))}
      </ul>
    </div>
  );
}
