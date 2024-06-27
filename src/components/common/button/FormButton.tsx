'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButtonProps {
  children: React.ReactNode;
  classNames?: string;
}

export default function FormButton({ children, classNames }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending} className={classNames}>
      {children}
    </Button>
  );
}
