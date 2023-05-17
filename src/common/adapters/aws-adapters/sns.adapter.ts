import * as AWS from "aws-sdk";
import enviroments from "src/common/entities/enviroments";
import { PublishResponse } from "aws-sdk/clients/sns";

// Amazon Simple Notification Service (Amazon SNS)
export class SNSAdapter {
  private config = {
    apiVersion: "2010-03-31",
    region: enviroments.AWS_REGION_FIRST,
  };

  private snsProvider: AWS.SNS;

  constructor() {
    this.snsProvider = new AWS.SNS(this.config);
  }

  public async sendOTP(phone: string, code: string): Promise<PublishResponse> {
    try {
      const params = {
        Message: code /* required */,
        PhoneNumber: phone,
      };
      return await this.snsProvider.publish(params).promise();
    } catch (error) {
      console.log(`Error in sendOTP: ${error}`);
      return error;
    }
  }
}
