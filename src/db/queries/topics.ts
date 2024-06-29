import { db } from '..';
import type { Topic } from '@prisma/client';

export function fetchTopics(): Promise<Topic[]> {
  return db.topic.findMany({});
}

export function fetchTopicsByTerm(searchQuery: string): Promise<Topic[]> {
  return db.topic.findMany({
    where: {
      OR: [
        { topicName: { contains: searchQuery } },
        { description: { contains: searchQuery } },
      ],
    },
  });
}
