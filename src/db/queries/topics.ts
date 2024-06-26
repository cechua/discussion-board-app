import { db } from '..';
import type { Topic } from '@prisma/client';

export function fetchTopics(): Promise<Topic[]> {
  return db.topic.findMany({});
}
