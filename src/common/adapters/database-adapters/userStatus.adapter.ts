import { PrismaClient, userStatus } from "../../../generated/client";
const prisma = new PrismaClient();

export class UserStatusAdapter {
  private client: PrismaClient;

  constructor() {
    this.client = prisma;
  }

  public async getUserStatusByName(name: string): Promise<userStatus> {
    try {
      return await this.client.userStatus.findFirst({
        where: { name },
      });
    } catch (error) {
      console.log(`Error in getUserStatusByName: ${error}`);
      return error;
    }
  }

  public async getUserStatusById(id: string): Promise<userStatus> {
    try {
      return await this.client.userStatus.findFirst({
        where: { id },
      });
    } catch (error) {
      console.log(`Error in getUserStatusById: ${error}`);
      return error;
    }
  }
}
