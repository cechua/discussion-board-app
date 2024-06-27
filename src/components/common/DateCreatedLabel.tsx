'use client';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
interface DateCreatedLabelProps {
  date: Date;
}

const DateCreatedLabel = ({ date }: DateCreatedLabelProps) => {
  return <span className="text-sm">{dayjs(date).fromNow()}</span>;
};

export default DateCreatedLabel;
