import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@octo/trpc';

export const trpc = createTRPCReact<AppRouter>();
