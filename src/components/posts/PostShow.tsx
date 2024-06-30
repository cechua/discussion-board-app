import AvatarIconWithUser from '@/components/common/AvatarIconWithUser';
import TopicChip from '@/components/common/TopicChip';
import { PostWithData, fetchPostById } from '@/db/queries/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CommentList from '../comments/CommentList';
import CommentCreateForm from '../comments/CommentCreateForm';
import { auth } from '@/auth';
import PostDeleteButton from './PostDeleteButton';
dayjs.extend(relativeTime);

interface PostShowProps {
  post: PostWithData;
}
const PostShow = async ({ post }: PostShowProps) => {
  const session = await auth();
  if (!post) notFound();
  return (
    <div className="flex justify-center pb-16">
      <div className="flex flex-col justify-center border-1 rounded-md min-h-32 px-4 pt-4 xl:w-3/5 xl:px-12">
        <div className="flex flex-col">
          <div className="flex flex-col items-start xl:flex-row xl:items-center xl:gap-4">
            <div className="flex flex-wrap items-center">
              <h3 className="font-bold text-lg capitalize">{post.title}</h3>
              <div className="grow sm:hidden">
                {session?.user?.id == post.userId && (
                  <PostDeleteButton postId={post.id} />
                )}
              </div>
            </div>
            <div className="flex gap-2 flex-col xl:flex-row xl:items-center">
              <div className="flex gap-4 items-center ">
                <AvatarIconWithUser
                  imageSrc={post.user.image || ''}
                  userName={post.user.name || ''}
                />
                <span className="text-sm">
                  {dayjs(post.createdAt).fromNow()}
                </span>
              </div>
              <ul className="flex gap-1 flex-1">
                {post.topics.map((topic) => {
                  return (
                    <li key={topic.id}>
                      <Link href={`/topics/${topic.topicName}`}>
                        <TopicChip
                          name={topic.topicName}
                          bgColor={topic.backgroundColor}
                          textColor={topic.textColor}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grow hidden sm:block">
              {session?.user?.id == post.userId && (
                <PostDeleteButton postId={post.id} />
              )}
            </div>
          </div>
        </div>

        <p className="flex-1 hover:cursor-pointer pt-2">{post.content}</p>
        <div className="mt-8 xl:mt-16">
          <CommentCreateForm postId={post.id} />
          <CommentList postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostShow;
