import { QueryClient } from '@tanstack/react-query';

/**
 * Tanstack query client for caching the data all over the app.
 * @type {QueryClient}
 */
export const queryClient = new QueryClient();
