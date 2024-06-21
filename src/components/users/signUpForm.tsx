'use client'; //TODO: REMOVE THIS OR MOVE THIS COMPONENT TO AN ACTUAL PAGE

import { createUser } from '@/actions/users/createUser';
import { useFormState } from 'react-dom';

export function SignUpForm() {
  const [formState, action] = useFormState(createUser, {
    errors: {},
  });
  return (
    <form action={action}>
      <label>
        Email
        <input name="email" type="email" className="text-red-200" />
      </label>
      <label>
        Password
        <input name="password" type="password" className="text-red-200" />
      </label>
      <button>Sign up</button>
    </form>
  );
}
