import { PrismaClient } from "@prisma/client";
// primsa best practices extract from prisma docs
const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

// check if the prisma instance already exists
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
