import { PrismaClient, users } from "../../../generated/client";
const prisma = new PrismaClient();

export class UserAdapter {
  private client: PrismaClient;

  constructor() {
    this.client = prisma;
  }

  public async getUserByPhone(phone: string): Promise<users> {
    try {
      return await this.client.users.findFirst({
        where: { phone },
      });
    } catch (error) {
      console.log(`Error in getUserByPhone: ${error}`);
      return error;
    }
  }

  public async createUser(
    phone: string,
    user_status_id?: string
  ): Promise<users> {
    try {
      await this.client.users.create({
        data: {
          phone,
          user_status_id,
        },
      });
    } catch (error) {
      console.log(`Error in createUser: ${error}`);
      return error;
    }
  }

  public async updateUser(data: any, user_id: string) {
    try {
      await this.client.users.update({
        data: { ...data },
        where: { id: user_id },
      });
    } catch (error) {
      console.log(`Error in updateUser: ${error}`);
      return error;
    }
  }
}
