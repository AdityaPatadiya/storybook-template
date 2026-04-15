import { generateOpenApiDocument } from 'trpc-to-openapi';
import { appRouter } from './router';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Octo Studio API',
  description: 'Minimal OpenAPI surface exposing health/monitoring endpoints.',
  version: '0.0.0',
  baseUrl: 'https://4000-ibvhmugiadv7ibd5kvtjr.e2b.app/api',
  tags: ['System'],
});
