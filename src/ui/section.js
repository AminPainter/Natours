import React from 'react';
import { Box, Container, styled } from '@mui/material';

const Section = ({ children, ...rest }) => (
  <StyledBox component='section' {...rest}>
    <Container maxWidth='lg'>{children}</Container>
  </StyledBox>
);

export default Section;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
