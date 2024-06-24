import PostList from '@/components/posts/PostList';
import TopicList from '@/components/topics/TopicList';

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 h-screen px-2 xl:px-6">
      <div className="collapse xl:visible">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Trending Topics</h1>
          <TopicList />
        </div>
        <div>
          <h1 className="text-xl font-bold my-2 h-8">Trending Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
      <div className="row-span-full xl:row-auto col-span-5 xl:col-span-3">
        <h1 className="text-2xl font-bold mb-4 h-8">Posts</h1>
        <PostList />
      </div>
      <div className="collapse xl:visible">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Recently Viewed Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
    </div>
  );
}
