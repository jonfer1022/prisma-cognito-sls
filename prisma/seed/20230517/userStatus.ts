import { PrismaClient } from "../../../src/generated/client";
const prisma = new PrismaClient();

const status = [
  { name: "signed_up" },
  { name: "sign_up_confirmed" },
  { name: "allowed_change_password" },
];

// create
const insertStatus = status.map(
  async (state) =>
    await prisma.userStatus.create({
      data: { name: state.name },
    })
);

export default Promise.all(insertStatus)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log("-----> ~ error:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
