import PostCreateForm from '@/components/posts/PostCreateForm';
import { fetchTopics } from '@/db/queries/topics';
import React from 'react';

const NewPostPage = async () => {
  const topics = await fetchTopics();
  return (
    <div>
      <PostCreateForm topics={topics} />
    </div>
  );
};

export default NewPostPage;
