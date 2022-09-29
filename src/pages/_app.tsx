import type { AppProps } from 'next/app';
import { useState } from 'react';
import GlobalStyle from '../../styles/global-style';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
