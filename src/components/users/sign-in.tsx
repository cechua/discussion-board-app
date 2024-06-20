import { signIn } from '@/auth';

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <label>
        Email
        <input name="email" type="email" className="text-red-200" />
      </label>
      <label>
        Password
        <input name="password" type="password" className="text-red-200" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
