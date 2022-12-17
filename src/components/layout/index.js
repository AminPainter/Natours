import React from 'react';
import { Box } from '@mui/material';

import Footer from './footer';

const Layout = ({ children }) => (
  <Box padding={4.5}>
    {children}
    <Footer />
  </Box>
);

export default Layout;
