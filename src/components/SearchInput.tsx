'use client';

import { searchInput } from '@/actions';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { SearchIcon } from './common/SvgIcons/SearchIcon';

export default function SearchInput() {
  const searchParams = useSearchParams();
  return (
    <form action={searchInput}>
      <Input
        name="searchQuery"
        defaultValue={searchParams.get('searchQuery') || ''}
        placeholder="Search"
        startContent={<SearchIcon filled />}
      />
    </form>
  );
}
