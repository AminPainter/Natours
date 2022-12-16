import React from 'react';
import { styled, Button, Typography } from '@mui/material';

const ButtonPrimary = ({ children, variant = 'secondary' }) => (
  <StyledButton variant='contained' primary={variant !== 'secondary'}>
    <StyledTypography primary={variant !== 'secondary'} variant='subtitle1'>
      {children}
    </StyledTypography>
  </StyledButton>
);

export default ButtonPrimary;

const StyledTypography = styled(Typography)(({ primary, theme }) => ({
  color: primary ? theme.palette.common.white : 'inherit',
}));

const StyledButton = styled(Button)(({ theme, primary }) => ({
  boxShadow: 'none',
  backgroundColor: primary
    ? theme.palette.primary.main
    : theme.palette.grey[100],
  borderRadius: theme.borderRadius.large,
  padding: theme.spacing(1.5, 4.5),
  color: theme.palette.grey[600],
  transition: `all .3s`,

  '&::after': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'inherit',
    borderRadius: 'inherit',
    transition: 'inherit',
    height: '100%',
    width: '100%',
    zIndex: -1,
  },

  '&:hover': {
    backgroundColor: primary
      ? theme.palette.primary.main
      : theme.palette.grey[100],
    transform: 'translateY(-4px)',
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',

    '&::after': {
      transform: 'scaleY(1.6) scaleX(1.4)',
      opacity: 0,
    },
  },

  '&:active': {
    transform: 'translateY(2px)',
  },
}));
