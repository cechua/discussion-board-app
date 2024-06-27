import { fetchTopics } from '@/db/queries/topics';
import TopicChip from '../common/TopicChip';
import Link from 'next/link';

const TopicList = async () => {
  const topics = await fetchTopics();
  return (
    <div className="border-t-1 p-1 border-b-1">
      <ul className="flex flex-wrap gap-1 items-center min-h-32 max-h-32 overflow-auto">
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
