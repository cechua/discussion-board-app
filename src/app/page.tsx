import PostList from '@/components/posts/PostList';
import TopicList from '@/components/topics/TopicList';
import { fetchAllPosts } from '@/db/queries/posts';

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen px-2 xl:px-6">
      <div className="flex flex-col items-center border-r-2 pt-4 collapse col-span-2 xl:visible">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Trending Topics</h1>
          <TopicList />
        </div>
        {/* <div>
          <h1 className="text-xl font-bold my-2 h-8">Trending Posts</h1>
          <PostList isSideContent />
        </div> */}
      </div>
      <div className="flex flex-col items-center pt-4 row-span-full xl:row-auto col-span-12 xl:col-span-7">
        <div>
          <h1 className="text-2xl font-bold mb-4 h-8">Posts</h1>
          <PostList fetchPosts={() => fetchAllPosts()} />
        </div>
      </div>
      <div className="flex flex-col items-center pt-4 collapse col-span-3 xl:visible">
        <div className="w-4/5">
          <h1 className="text-xl font-bold mb-4 h-8">Recently Viewed Posts</h1>
          <PostList fetchPosts={() => fetchAllPosts()} isSideContent />
        </div>
      </div>
    </div>
  );
}
