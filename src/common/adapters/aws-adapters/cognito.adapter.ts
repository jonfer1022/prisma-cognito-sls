import * as AWS from "aws-sdk";
import * as crypto from "crypto";
import * as dotenv from "dotenv";
dotenv.config();

export class CognitoAdapter {
  private config = {
    apiVersion: "2016-04-18",
    region: process.env.AWS_REGION_FIRST_DEV,
  };

  private secretHash = process.env.AWS_COGNITO_SECRET_CLIENT_ID;
  private clientId = process.env.AWS_COGNITO_CLIENT_ID;
  private poolId = process.env.AWS_USER_POOL_ID;

  private cognitoIdentity: AWS.CognitoIdentityServiceProvider;

  constructor() {
    this.cognitoIdentity = new AWS.CognitoIdentityServiceProvider(this.config);
  }

  public async signUpUser(
    username: string,
    password: string,
    userAttr?: Array<any>
  ): Promise<boolean> {
    try {
      const params = {
        ClientId: this.clientId /* required */,
        Password: password /* required */,
        Username: username /* required */,
        SecretHash: this.hashSecret(username),
        UserAttributes: userAttr,
      };
      await this.cognitoIdentity.signUp(params).promise();
      return true;
    } catch (error) {
      console.log(`Error in signUpUser: ${error}`);
      return error;
    }
  }

  public async signInUser(
    username: string,
    password: string
  ): Promise<boolean> {
    const params = {
      AuthFlow: "USER_PASSWORD_AUTH" /* required */,
      ClientId: this.clientId /* required */,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
        SECRET_HASH: this.hashSecret(username),
      },
    };

    try {
      const data = await this.cognitoIdentity.initiateAuth(params).promise();
      console.log("-----> ~ Cognito ~ data:", data);

      return true;
    } catch (error) {
      console.log(`Error in signInUser: ${error}`);
      return error;
    }
  }

  public async confirmSignUp(username: string, code: string) {
    const params = {
      ClientId: this.clientId,
      ConfirmationCode: code,
      Username: username,
      SecretHash: this.hashSecret(username),
    };

    try {
      await this.cognitoIdentity.confirmSignUp(params).promise();
    } catch (error) {
      console.log(`Error in confirmSignUp: ${error}`);
      return error;
    }
  }

  public async forgotPassword(username: string) {
    var params = {
      ClientId: this.clientId /* required */,
      Username: username /* required */,
      SecretHash: this.hashSecret(username),
    };

    try {
      await this.cognitoIdentity.forgotPassword(params).promise();
    } catch (error) {
      console.log(`Error in forgotPassword: ${error}`);
      return error;
    }
  }

  public async confirmNewPassword(
    username: string,
    password: string,
    code: string
  ): Promise<boolean> {
    var params = {
      ClientId: this.clientId /* required */,
      ConfirmationCode: code /* required */,
      Password: password /* required */,
      Username: username /* required */,
      SecretHash: this.hashSecret(username),
    };
    try {
      await this.cognitoIdentity.confirmForgotPassword(params).promise();
      return true;
    } catch (error) {
      console.log(`Error in confirmNewPassword: ${error}`);
      return error;
    }
  }

  public async setPasswordToUser(
    username: string,
    newPassword: string
  ): Promise<boolean> {
    const params = {
      Password: newPassword /* required */,
      UserPoolId: this.poolId /* required */,
      Username: username /* required */,
      Permanent: true,
    };

    try {
      await this.cognitoIdentity.adminSetUserPassword(params).promise();
      return true;
    } catch (error) {
      console.log(`Error in setPasswordToUser: ${error}`);
      return error;
    }
  }

  private hashSecret(username: string): string {
    return crypto
      .createHmac("SHA256", this.secretHash)
      .update(username + this.clientId)
      .digest("base64");
  }
}
