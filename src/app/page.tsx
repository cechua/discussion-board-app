import PostList from '@/components/posts/PostList';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-screen">
      <div className="col-span-1">
        <div>
          <h1 className="text-xl m-2">Trending topics</h1>
        </div>
        <div>
          <h1 className="text-xl m-2">Followed Topics</h1>
        </div>
      </div>
      <div className="col-span-2">
        <PostList />
      </div>
      <div className="col-span-1">
        <div>
          <h1 className="text-xl m-2">Trending Posts</h1>
        </div>
        <div>
          <h1 className="text-xl m-2">Recently Viewed Posts</h1>
        </div>
      </div>
    </div>
  );
}
