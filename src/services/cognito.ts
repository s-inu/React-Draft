import { Amplify } from "aws-amplify";
import { ConsoleLogger } from "aws-amplify/utils";
import { fetchAuthSession } from "@aws-amplify/auth";
import awsConfig from "../aws-exports";

Amplify.configure(awsConfig);
const logger = new ConsoleLogger("CognitoService");

export const getTokens = async (): AsyncResultOf<{
  idToken: string | null;
  accessToken: string | null;
}> => {
  try {
    const session = await fetchAuthSession();
    const tokens = session.tokens;

    if (!tokens) {
      logger.error("No tokens found");
      return {
        value: null,
        error: new Error("No tokens found"),
      };
    }

    const { idToken, accessToken } = tokens;
    return {
      value: {
        idToken: idToken?.toString() ?? null,
        accessToken: accessToken.toString(),
      },
      error: null,
    };
  } catch (error) {
    logger.error("Failed to get tokens", error);

    throw error;
  }
};

const USERNAME1 = "sam@unretire.io";
const PWD1 = "Sam09$urte.IO";
