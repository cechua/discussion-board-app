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
  return <div>{searchQuery}</div>;
};

export default SearchPage;
