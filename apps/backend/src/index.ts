import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createOpenApiExpressMiddleware } from 'trpc-to-openapi';
import { appRouter, createContext, openApiDocument } from './trpc';
import { prisma } from './db';

const PORT = Number(process.env.PORT ?? 4000);
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:5173';

async function main(): Promise<void> {
  const app = express();

  app.use(
    cors({
      origin: CORS_ORIGIN,
      credentials: true,
    }),
  );

  // tRPC (native JSON-RPC protocol) — untouched.
  app.use(
    '/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  // OpenAPI REST surface — only procedures with `.meta({ openapi: ... })`
  // are exposed here. Currently: GET /api/health.
  app.use(
    '/api',
    createOpenApiExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  // Swagger UI served from the generated OpenAPI document.
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

  await prisma.$connect();

  app.listen(PORT, () => {
    console.info(`[backend] tRPC  → http://localhost:${PORT}/trpc`);
    console.info(`[backend] REST  → http://localhost:${PORT}/api/health`);
    console.info(`[backend] Docs  → http://localhost:${PORT}/docs`);
  });
}

main().catch((err) => {
  console.error('[backend] fatal error', err);
  process.exit(1);
});
