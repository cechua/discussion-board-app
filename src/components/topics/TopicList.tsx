import { fetchTopics } from '@/db/queries/topics';
import TopicChip from '../common/TopicChip';
import Link from 'next/link';
import type { Topic } from '@prisma/client';
interface TopicListProps {
  fetchTopics: () => Promise<Topic[]>;
}

const TopicList = async ({ fetchTopics }: TopicListProps) => {
  const topics = await fetchTopics();
  return (
    <div className="border-t-1 p-1 border-b-1">
      <ul className="flex flex-wrap gap-1 items-center py-4 max-h-32 overflow-auto">
        {topics.map((topic, i) => {
          return (
            <li key={i}>
              <Link href={`/topics/${topic.topicName}`}>
                <TopicChip
                  name={topic.topicName}
                  bgColor={topic.backgroundColor}
                  textColor={topic.textColor}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
