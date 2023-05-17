import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "verify-code-to-forgot-password",
        cors: {
          origin: "*",
        },
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
  environment: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
