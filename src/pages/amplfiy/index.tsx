import {
  View,
  Image,
  useTheme,
  Text,
  Heading,
  Button,
  useAuthenticator,
  Authenticator,
  AuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { I18n } from 'aws-amplify/utils';
import { Amplify } from "aws-amplify";
import awsConfig from "../../aws-exports";

Amplify.configure(awsConfig);
// I18n.putVocabulariesForLanguage('en', {
//   'Sign In': 'Login', // Tab header
//   'Sign in': 'Log in', // Button label
//   'Sign in to your account': 'Welcome Back!',
//   Username: 'Enter your username', // Username label
//   Password: 'Enter your password', // Password label
//   'Forgot your password?': 'Reset Password',
// });


const components: AuthenticatorProps["components"] = {
  Header() {
    return <h1 className="border border-red-700 text-6xl">Header</h1>;
  },

  Footer() {
    return <footer className="border border-red-700 text-6xl">Footer</footer>;
  },

  SignIn: {
    Header() {
      return (
        <h1 className="border border-green-700 text-2xl">SignIn Heading</h1>
      );
    },
    Footer() {
      const { toForgotPassword, toSignUp } = useAuthenticator((c) => [
        c.toForgotPassword,
      ]);

      return (
        <footer
          className="flex flex-col items-start border border-green-700
            [&>button]:underline"
        >
          <p className="text-2xl">SignIn Footer</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              toForgotPassword();
            }}
            className="justify-self-start"
          >
            reset password
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              toSignUp();
            }}
          >
            to sign up
          </button>
        </footer>
      );
    },
  },

  SignUp: {
    Header() {
      return <h1>SignUp Header</h1>;
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <footer>
          <button
            onClick={(e) => {
              e.preventDefault();
              toSignIn();
            }}
          >
            Back to Sign In
          </button>
        </footer>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields: AuthenticatorProps["formFields"] = {
  signIn: {
    username: {
      label: "signIn username label",
      placeholder: "signIn username placeholder",
    },
    password: {
      label: "signIn password label",
      placeholder: "signIn password placeholder",
    },
    custom: {
      label: "signIn custom label",
      placeholder: "signIn custom placeholder",
    },
  },

  signUp: {
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      // order: 2,
    },
    confirm_password: {
      label: "Confirm Password:",
      // order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function Cognito() {
  return (
    <Authenticator
      formFields={formFields}
      components={components}
      hideSignUp={false}
      initialState="signUp"
    >
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}
