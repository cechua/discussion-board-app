import PostList from '@/components/posts/PostList';
import Profile from '@/components/profile';
import TopicList from '@/components/topics/TopicList';

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 px-6 h-screen">
      <div className="collapse lg:visible">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Trending Topics</h1>
          <TopicList />
        </div>
        <div>
          <h1 className="text-xl font-bold my-2 h-8">Trending Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
      <div className="row-span-full lg:row-auto col-span-5 xl:col-span-3">
        <h1 className="text-2xl font-bold mb-4 h-8">Posts</h1>
        <PostList />
      </div>
      <div className="collapse lg:visible">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Recently Viewed Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
    </div>
  );
}
