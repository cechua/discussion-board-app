'use client';
import { useFormState } from 'react-dom';
import { Button, Input } from '@nextui-org/react';
import * as actions from '@/actions';
import FormSubmitButton from '../common/formSubmitButton';

const SignInCredentialsForm = () => {
  const [formState, action] = useFormState(actions.signInCredentials, {
    errors: {},
  });
  return (
    //form actions automatically passes a FormData
    <form action={action}>
      <div className="flex flex-col gap-4 w-80">
        <Input
          name="email"
          label="Email"
          labelPlacement="outside"
          placeholder="Email"
          type="email"
        />
        <Input
          name="password"
          label="Password"
          labelPlacement="outside"
          placeholder="Password"
          type="password"
        />

        {formState.errors._formError ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">
            {formState.errors._formError.join(', ')}
          </div>
        ) : null}

        <FormSubmitButton>Login</FormSubmitButton>
      </div>
    </form>
  );
};

export default SignInCredentialsForm;
