import PostList from '@/components/posts/PostList';
import Profile from '@/components/profile';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-screen">
      <div className="col-span-1">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Trending Topics</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Trending Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-4 h-8">Posts</h1>
        <PostList />
        {/* <Profile /> */}
      </div>
      <div className="col-span-1">
        <div>
          <h1 className="text-xl font-bold mb-4 h-8">Recently Viewed Posts</h1>
          <PostList isSideContent />
        </div>
      </div>
    </div>
  );
}
