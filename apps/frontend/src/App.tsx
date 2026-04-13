import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
import { UserFormContainer } from './components/UserFormContainer';

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
        <main
          style={{
            fontFamily: 'system-ui, sans-serif',
            padding: '2rem',
            maxWidth: 640,
            margin: '0 auto',
          }}
        >
          <h1>Octo Studio</h1>
          <UserFormContainer />
        </main>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
