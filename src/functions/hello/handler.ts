import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";

import schema from "./schema";
import { UserService } from "src/common/services";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
): Promise<APIGatewayProxyResult> => {
  console.log("-----> ~ event:", event);
  const userService = new UserService();
  const result = await userService.createSimpleUser();
  return formatJSONResponse(result);
};

export const main = middyfy(hello);
