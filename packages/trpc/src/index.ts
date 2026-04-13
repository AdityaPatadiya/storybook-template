// Browser-safe entry: exports Zod schemas and the AppRouter TYPE only.
// The AppRouter type import is stripped at compile time, so no server-only
// dependencies (Prisma, Express) leak into the frontend bundle.
// Explicit re-exports (not `export *`) so bundlers can statically analyze them.
export { createUserSchema, userSchema } from './schemas/user';
export type { CreateUserInput, UserSchema } from './schemas/user';
export type { AppRouter } from './router';
export type { Context } from './context';
