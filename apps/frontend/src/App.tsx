import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
import { LandingPage } from './components/LandingPage';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/trpc';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: API_URL })],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* Render the full landing page for a polished UI */}
        <LandingPage />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

