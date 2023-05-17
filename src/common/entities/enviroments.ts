import * as dotenv from "dotenv";
dotenv.config();

export default {
  AWS_REGION_FIRST:
    process.env.NODE_ENV === "development"
      ? process.env.AWS_REGION_FIRST_DEV
      : process.env.AWS_REGION_FIRST_PROD,
  AWS_COGNITO_SECRET_CLIENT_ID:
    process.env.NODE_ENV === "development"
      ? process.env.AWS_COGNITO_SECRET_CLIENT_ID_DEV
      : process.env.AWS_COGNITO_SECRET_CLIENT_ID_PROD,
  AWS_COGNITO_CLIENT_ID:
    process.env.NODE_ENV === "development"
      ? process.env.AWS_COGNITO_CLIENT_ID_DEV
      : process.env.AWS_COGNITO_CLIENT_ID_PROD,
} as const;
