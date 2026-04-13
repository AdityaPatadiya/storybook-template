import { generateOpenApiDocument } from 'trpc-to-openapi';
import { appRouter } from './router';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Octo Studio API',
  description: 'Minimal OpenAPI surface exposing health/monitoring endpoints.',
  version: '0.0.0',
  baseUrl: 'http://localhost:4000/api',
  tags: ['System'],
});
