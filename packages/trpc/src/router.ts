import { z } from 'zod';
import { router, publicProcedure } from './trpc';
import { createUserSchema } from './schemas/user';

export const appRouter = router({
  health: publicProcedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/health',
        summary: 'Health check endpoint',
        tags: ['System'],
      },
    })
    .input(z.void())
    .output(z.object({ status: z.string() }))
    .query(() => {
      return { status: 'ok' };
    }),

  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input?.name ?? 'world'}!`,
      };
    }),

  listUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  createUser: publicProcedure.input(createUserSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
