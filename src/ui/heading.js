import React from 'react';
import { styled, Typography } from '@mui/material';

const Heading = ({ children }) => (
  <StyledTypography
    textAlign='center'
    textTransform='uppercase'
    variant='h4'
    letterSpacing={2}
    fontWeight={600}>
    {children}
  </StyledTypography>
);

export default Heading;

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'transparent',
  WebkitBackgroundClip: 'text',
  backgroundImage: `linear-gradient(to right bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  transition: 'all .3s',

  '&:hover': {
    transform: 'skewX(15deg) skewY(2deg) scale(1.1)',
    textShadow: '.5rem .8rem 1.2rem rgba(0,0,0,0.2)',
  },
}));
