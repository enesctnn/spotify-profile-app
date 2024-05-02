import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/index.tsx';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/client.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
