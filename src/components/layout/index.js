import React from 'react';
import { Box, styled } from '@mui/material';

import Footer from './footer';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <PaddedBox>
    <Navigation />
    {children}
    <Footer />
  </PaddedBox>
);

const PaddedBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4.5),

  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

export default Layout;
