'use client';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';
import { Key, useState } from 'react';
import TopicChip from '../common/TopicChip';
import type { Topic } from '@prisma/client';
interface PostCreateFormProps {
  topics: Topic[];
}

const PostCreateForm = ({ topics }: PostCreateFormProps) => {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const onSelectionChange = (id: Key | null) => {
    const topic = topics.find((topic) => topic.id == id);
    if (topic) {
      if (!selectedTopics.find((topic) => topic.id == id?.toString())) {
        setSelectedTopics((existingTopics) => [...existingTopics, topic]);
      }
    }
  };

  const onTopicRemove = (id: string) => {
    setSelectedTopics(selectedTopics.filter((topic) => topic.id != id));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-8 w-1/2 border border-2-solid rounded-2">
        <h1 className="font-bold text-2xl">Create a Post</h1>
        <Autocomplete
          label="Search a topic"
          variant="bordered"
          defaultItems={topics || []}
          className="max-w-xs"
          allowsCustomValue={true}
          onSelectionChange={onSelectionChange}
          isDisabled={selectedTopics.length >= 3}
        >
          {(item) => (
            <AutocompleteItem key={item.id}>{item.topicName}</AutocompleteItem>
          )}
        </Autocomplete>
        <div className="text-small text-default-500 flex gap-2">
          {selectedTopics.map((topic) => (
            <TopicChip
              name={topic.topicName}
              bgColor={topic.backgroundColor}
              textColor={topic.textColor}
              onClose={() => onTopicRemove(topic.id)}
              key={topic.id}
            />
          ))}
        </div>
        <Input
          name="title"
          label="Title"
          labelPlacement="outside"
          placeholder="Title"
        />
        <Textarea
          name="content"
          label="Content"
          labelPlacement="outside"
          placeholder="Content"
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default PostCreateForm;
