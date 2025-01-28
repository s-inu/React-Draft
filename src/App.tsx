import { Authenticator } from "@aws-amplify/ui-react";
import Cognito from "@pages/amplfiy";
import HTMLEscape from "@pages/htmlEscape";

function App() {
  return (
    // <Authenticator.Provider>
      <Cognito />
    // </Authenticator.Provider>
  );
}

export default App;
