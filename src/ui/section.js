import React from 'react';
import { Box, styled } from '@mui/material';

const Section = ({ children, ...rest }) => (
  <StyledBox component='section' {...rest}>
    <Box maxWidth='80rem' mx='auto'>
      {children}
    </Box>
  </StyledBox>
);

export default Section;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
}));
