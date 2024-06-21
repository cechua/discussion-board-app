import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { authProviders } from '@/enums/authproviders';
interface signInProps {
  provider: authProviders;
}

export function SignIn({ provider }: signInProps) {
  switch (provider) {
    case authProviders.GITHUB:
      return (
        <div>
          <form
            action={actions.signInGitHub}
            className="w-full flex justify-center"
          >
            <Button
              type="submit"
              color="secondary"
              variant="bordered"
              className="w-full"
            >
              Sign In Github
            </Button>
          </form>
        </div>
      );
    case authProviders.GOOGLE:
      return (
        <div>
          <div>
            <form
              action={actions.signInGoogle}
              className="w-full flex justify-center"
            >
              <Button
                type="submit"
                color="primary"
                variant="bordered"
                className="w-full"
              >
                Sign In Google
              </Button>
            </form>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}
