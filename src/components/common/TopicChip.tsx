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
      style={{
        backgroundColor: `#${bgColor}`,
        color: `#${textColor}`,
      }} /*Used inline style for dynamic color using hex rgb */
      onClose={onClose}
    >
      {name}
    </Chip>
  );
};

export default TopicChip;
