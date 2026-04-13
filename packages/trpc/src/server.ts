// Server-only entry: exports the concrete router and context factory.
// Consumed by the backend via `@octo/trpc/server`.
export { appRouter } from './router';
export type { AppRouter } from './router';
export { createContext } from './context';
export type { Context } from './context';
export { openApiDocument } from './openapi';
export * from './schemas';
