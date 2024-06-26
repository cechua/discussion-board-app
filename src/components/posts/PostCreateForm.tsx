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

const mockTopics = [
  {
    id: 1,
    name: 'testtopic',
    bgColor: '3f3ff1',
    textColor: 'eeeeee',
  },
  {
    id: 2,
    name: 'qwe',
    bgColor: '33336b',
    textColor: 'eeeeee',
  },
  {
    id: 3,
    name: 'ewq',
    bgColor: '47ba49',
    textColor: 'eeeeee',
  },
  {
    id: 4,
    name: 'rr',
    bgColor: '87842c',
    textColor: 'eeeeee',
  },
  {
    id: 5,
    name: 'tt',
    bgColor: '7e41b2',
    textColor: 'eeeeee',
  },
];

const PostCreateForm = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedTopicsKey, setSelectedTopicsKey] = useState<number[]>([]); //TEMPORARY. Will use selectedTopics with Topics type to use on disabledkeys

  // const onSelectionChange = (id: Key | null) => {
  //   console.log(id);
  //   setSelectedKey(id);
  // };
  const onSelectionChange = (id: Key | null) => {
    const topic = mockTopics.find((topic) => topic.id == id);
    if (topic) {
      if (!selectedTopicsKey.find((topicId) => topicId == id)) {
        setSelectedTopics((existingTopics) => [...existingTopics, topic.name]);
        setSelectedTopicsKey((selectedTopicsKey) => [
          ...selectedTopicsKey,
          topic.id,
        ]);
      }
    }
  };

  const onTopicRemove = (id: number) => {
    setSelectedTopicsKey(
      selectedTopicsKey.filter((existingId) => existingId != id)
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-8 w-1/2 border border-2-solid rounded-2">
        <h1 className="font-bold text-2xl">Create a Post</h1>
        <Autocomplete
          label="Search a topic"
          variant="bordered"
          defaultItems={mockTopics}
          className="max-w-xs"
          allowsCustomValue={true}
          onSelectionChange={onSelectionChange}
          isDisabled={selectedTopicsKey.length >= 3}
        >
          {(item) => (
            <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
          )}
        </Autocomplete>
        <div className="text-small text-default-500 flex gap-2">
          {mockTopics
            .filter((m) => selectedTopicsKey.includes(m.id))
            .map((topic, i) => (
              <TopicChip
                name={topic.name}
                bgColor={topic.bgColor}
                textColor={topic.textColor}
                onClose={() => onTopicRemove(topic.id)}
                key={i}
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
