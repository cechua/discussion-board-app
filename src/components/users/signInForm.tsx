import { signIn } from '@/auth';
import { Button, Input } from '@nextui-org/react';
import * as actions from '@/actions';
import { authProviders } from '@/enums/authproviders';
import FormSubmitButton from '../common/formSubmitButton';
import SignInCredentialsForm from './signInCredentialsForm';
interface signInProps {
  provider: authProviders;
}

const gitHubButton = (
  <form action={actions.signInGitHub} className="w-full flex justify-center">
    <Button
      type="submit"
      color="secondary"
      variant="bordered"
      className="w-full"
    >
      Sign In Github
    </Button>
  </form>
);
export function SignIn({ provider }: signInProps) {
  switch (provider) {
    case authProviders.CREDENTIALS:
      return (
        <div>
          <SignInCredentialsForm />
        </div>
      );
    case authProviders.GITHUB:
      return <div>{gitHubButton}</div>;
    default:
      return <div></div>;
  }
}
