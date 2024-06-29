import PostList from '@/components/posts/PostList';
import TopicList from '@/components/topics/TopicList';
import { fetchPostByTerm } from '@/db/queries/posts';
import { fetchTopicsByTerm } from '@/db/queries/topics';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    searchQuery: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { searchQuery } = searchParams;

  if (!searchQuery) {
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center pt-4 pb-16">
      <h1 className="text-2xl font-bold">Search term: {searchQuery} </h1>
      <div className="w-1/2">
        <h1 className="text-xl font-bold">Relevant Topics</h1>
        <TopicList fetchTopics={() => fetchTopicsByTerm(searchQuery)} />
      </div>
      <div className="w-1/2">
        <h1 className="text-xl font-bold">Relevant Posts</h1>
        <PostList fetchPosts={() => fetchPostByTerm(searchQuery)} />
      </div>
    </div>
  );
};

export default SearchPage;
