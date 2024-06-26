import { Chip } from '@nextui-org/react';
import React from 'react';

interface TopicChipProps {
  id?: number;
  name: string;
  bgColor: string;
  textColor: string;
  onClose?: () => void;
}

const TopicChip = ({ name, bgColor, textColor, onClose }: TopicChipProps) => {
  return (
    <Chip
      size="sm"
      classNames={{
        base: bgColor,
        content: textColor,
        closeButton: textColor,
      }}
      onClose={onClose}
    >
      {name}
    </Chip>
  );
};

export default TopicChip;
