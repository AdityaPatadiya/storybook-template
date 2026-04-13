import { config } from 'dotenv';
import path from 'path';
import { PrismaClient } from '@prisma/client';

// Load packages/db/.env so DATABASE_URL is available whenever the
// Prisma client is instantiated from any consuming package.
config({ path: path.resolve(__dirname, '..', '.env') });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export type { User } from '@prisma/client';
export { Prisma } from '@prisma/client';
