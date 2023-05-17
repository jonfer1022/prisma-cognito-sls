import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";

import schema from "./schema";
import { LoginService } from "src/common/services";

const signIn: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
): Promise<APIGatewayProxyResult> => {
  const loginService = new LoginService();
  const result = await loginService.signIn(
    event.body.phone,
    event.body.password
  );
  return formatJSONResponse(result);
};

export const main = middyfy(signIn);
