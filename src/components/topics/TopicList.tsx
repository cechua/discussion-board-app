import { Chip } from '@nextui-org/react';

const mockTopics = [
  { name: 'testtopic', bgColor: 'bg-stone-800', textColor: 'text-white' },
  { name: 'testtopic2', bgColor: 'bg-red-800', textColor: 'text-white' },
  { name: 'testtopic3', bgColor: 'bg-yellow-800', textColor: 'text-white' },
  { name: 'testtopic4', bgColor: 'bg-slate-800', textColor: 'text-white' },
  { name: 'testtopic5555555', bgColor: 'bg-gray-800', textColor: 'text-white' },
  { name: 'testtopic655', bgColor: 'bg-blue-800', textColor: 'text-white' },
  { name: 'testtopic7', bgColor: 'bg-green-800', textColor: 'text-white' },
  { name: 'testtopic8', bgColor: 'bg-amber-800', textColor: 'text-white' },
  { name: 'testtopic9', bgColor: 'bg-indigo-800', textColor: 'text-white' },
  { name: 'testtopic', bgColor: 'bg-stone-800', textColor: 'text-white' },
  { name: 'testtopic2', bgColor: 'bg-red-800', textColor: 'text-white' },
  { name: 'testtopic3', bgColor: 'bg-yellow-800', textColor: 'text-white' },
  { name: 'testtopic4', bgColor: 'bg-slate-800', textColor: 'text-white' },
  { name: 'testtopic5555555', bgColor: 'bg-gray-800', textColor: 'text-white' },
  { name: 'testtopic655', bgColor: 'bg-blue-800', textColor: 'text-white' },
  { name: 'testtopic7', bgColor: 'bg-green-800', textColor: 'text-white' },
  { name: 'testtopic8', bgColor: 'bg-amber-800', textColor: 'text-white' },
  { name: 'testtopic9', bgColor: 'bg-indigo-800', textColor: 'text-white' },
  { name: 'testtopic3', bgColor: 'bg-yellow-800', textColor: 'text-white' },
  // { name: 'testtopic4', bgColor: 'bg-slate-800', textColor: 'text-white' },
  // { name: 'testtopic8', bgColor: 'bg-amber-800', textColor: 'text-white' },
  // { name: 'testtopic9', bgColor: 'bg-indigo-800', textColor: 'text-white' },
  // { name: 'testtopic3', bgColor: 'bg-yellow-800', textColor: 'text-white' },
  // { name: 'testtopic4', bgColor: 'bg-slate-800', textColor: 'text-white' },
];

const TopicList = () => {
  return (
    <div className="border-t-1 p-1 border-b-1">
      <ul className="flex flex-wrap gap-1 items-center min-h-32 max-h-32 overflow-auto">
        {mockTopics.map((topic, i) => {
          return (
            <li key={i}>
              <Chip
                size="sm"
                classNames={{
                  base: topic.bgColor,
                  content: topic.textColor,
                }}
              >
                {topic.name}
              </Chip>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
