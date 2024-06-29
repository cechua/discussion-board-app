'use client';
import { localStorageKeyNames } from '@/enums/localStorageKeyNames';
import React, { Suspense, useEffect, useState } from 'react';
import { PostWithData } from '@/db/queries/posts';
import { getPostsByIds } from '@/actions';
import PostItem from './PostItem';

const RecentPosts = () => {
  const [posts, setPosts] = useState<PostWithData[]>([]);

  const getPosts = async (ids: string[]) => {
    const fetchedPosts = await getPostsByIds(ids);
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    const existingPostIds = localStorage.getItem(
      localStorageKeyNames.LOCALSTORAGE_RECENT_POSTS_IDS
    );
    const parsedPostIds = existingPostIds ? JSON.parse(existingPostIds) : [];
    getPosts(parsedPostIds);
  }, []);

  if (!posts || posts.length == 0) {
    return (
      <div className="flex flex-col border-t-1">
        <h1 className="text-lg font-bold mt-2">No recently viewed posts...</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col border-b-1">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} isSideContent />;
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
