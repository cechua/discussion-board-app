import { fetchComments } from '@/db/queries/comments';

interface CommentsListProps {
  postId: string;
}

export default async function CommentsList({ postId }: CommentsListProps) {
  const comments = await fetchComments(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <div className="mt-8">
      <h1 className="text-md font-bold">{comments.length} comments</h1>
      <ul>
        {topLevelComments.map((comment) => (
          <li key={comment.id}>{comment.commentMessage}</li>
        ))}
      </ul>
    </div>
  );
}
