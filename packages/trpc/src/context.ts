import { prisma } from '@octo/db';

export function createContext() {
  return {
    prisma,
  };
}

export type Context = ReturnType<typeof createContext>;
