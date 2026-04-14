import { generateOpenApiDocument } from 'trpc-to-openapi';
import { appRouter } from './router';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Octo Studio API',
  description: 'Minimal OpenAPI surface exposing health/monitoring endpoints.',
  version: '0.0.0',
  baseUrl: 'https://4000-iclbip3udmul3aydf7w6g.e2b.app/api',
  tags: ['System'],
});
