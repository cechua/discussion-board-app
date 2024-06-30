'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButtonProps {
  children: React.ReactNode;
  classNames?: string;
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  variant?: 'flat' | 'solid' | 'bordered' | 'light' | 'ghost';
}

export default function FormButton({
  children,
  classNames,
  color,
  variant,
}: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      className={classNames}
      color={color}
      variant={variant}
    >
      {children}
    </Button>
  );
}
