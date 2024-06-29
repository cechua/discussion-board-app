'use client';
import { Input, Listbox, Textarea, ListboxItem } from '@nextui-org/react';
import { Key, useMemo, useState } from 'react';
import TopicChip from '../common/TopicChip';
import type { Topic } from '@prisma/client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import FormButton from '../common/button/FormButton';
interface PostCreateFormProps {
  topics: Topic[];
}

const PostCreateForm = ({ topics }: PostCreateFormProps) => {
  const [inputFilterTopic, setInputFilterTopic] = useState('');
  const [showListBox, setShowListBox] = useState(false);
  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => topic.topicName.includes(inputFilterTopic));
  }, [inputFilterTopic, topics]);

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const selectedTopics = useMemo(() => {
    return topics.filter((topic) =>
      Array.from(selectedKeys).includes(topic.id)
    );
  }, [selectedKeys, topics]);

  const [formState, action] = useFormState(
    actions.createPost.bind(null, Array.from(selectedKeys)),
    {
      errors: {},
    }
  );

  return (
    <div className="flex justify-center">
      <form
        action={action}
        className="flex flex-col gap-4 border border-2-solid rounded-2 w-full mx-4 p-4 xl:w-1/2 xl:p-8"
        noValidate /*Needed to allow Zod to do the validation, not having this causes issue of submit button would not work once error is returned(isInvalid is true) */
      >
        <h1 className="font-bold text-2xl">Create a Post</h1>
        <div className="relative">
          <Input
            name="topic"
            label="Topic"
            labelPlacement="outside"
            placeholder="Search a topic"
            value={inputFilterTopic}
            onChange={(e) => setInputFilterTopic(e.target.value)}
            onClick={() => setShowListBox(true)}
            onFocusChange={() => setShowListBox(false)}
            autoComplete="off"
          />
          {showListBox && (
            <div className="flex absolute w-full z-50 bg-slate-50 max-h-36 overflow-auto">
              <Listbox
                aria-label="Multiple selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {
                  setInputFilterTopic('');
                  setSelectedKeys(keys as Set<string>);
                }}
                disabledKeys={
                  selectedKeys.size >= 3 ? topics.map((topic) => topic.id) : []
                }
              >
                {filteredTopics.map((topic) => (
                  <ListboxItem key={topic.id}>{topic.topicName}</ListboxItem>
                ))}
              </Listbox>
            </div>
          )}
        </div>
        <div className="text-small text-default-500 flex gap-2">
          {selectedTopics.map((topic) => (
            <TopicChip
              name={topic.topicName}
              bgColor={topic.backgroundColor}
              textColor={topic.textColor}
              onClose={() =>
                setSelectedKeys((selectedKeys) => {
                  selectedKeys.delete(topic.id);
                  return new Set(selectedKeys);
                })
              }
              key={topic.id}
            />
          ))}
        </div>
        <Input
          name="title"
          label="Title"
          labelPlacement="outside"
          placeholder="Title"
          isInvalid={!!formState.errors.title}
          errorMessage={formState.errors.title?.join(', ')}
        />
        <Textarea
          name="content"
          label="Content"
          labelPlacement="outside"
          placeholder="Content"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(', ')}
        />

        {formState.errors._form ? (
          <div className="rounded px-4 py-2 bg-red-200 border border-red-400 w-fit">
            {formState.errors._form.join(', ')}
          </div>
        ) : null}

        <FormButton classNames="bg-blue-400 text-white">Submit</FormButton>
      </form>
    </div>
  );
};

export default PostCreateForm;
