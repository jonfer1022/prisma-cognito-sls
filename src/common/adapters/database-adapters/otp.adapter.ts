import { PrismaClient, otpHistory } from "../../../generated/client";
const prisma = new PrismaClient();

export class OTPAdapter {
  private client: PrismaClient;

  constructor() {
    this.client = prisma;
  }

  public async saveOTP(code: string, user_id: string) {
    try {
      return await this.client.otpHistory.create({
        data: {
          code,
          user_id,
        },
      });
    } catch (error) {
      console.log(`Error in saveOTP: ${error}`);
      return error;
    }
  }

  public async getOTPByCode(
    code: string,
    user_id: string
  ): Promise<otpHistory[]> {
    try {
      return await this.client.otpHistory.findMany({
        where: { code, user_id },
        orderBy: { updated_at: "desc" },
      });
    } catch (error) {
      console.log(`Error in saveOTP: ${error}`);
      return error;
    }
  }
}
