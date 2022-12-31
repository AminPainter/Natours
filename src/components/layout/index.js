import React from 'react';
import { Box } from '@mui/material';

import Footer from './footer';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <Box padding={4.5}>
    <Navigation />
    {children}
    <Footer />
  </Box>
);

export default Layout;
