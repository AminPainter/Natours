import React from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from 'ui';
import Layout from 'components/layout';
import 'styles/global.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
