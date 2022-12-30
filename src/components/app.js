import React from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import { theme } from 'ui';
import Layout from 'components/layout';
import 'styles/global.css';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      alert('Something went wrong');
    },
  }),
});

export const App = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  </QueryClientProvider>
);
