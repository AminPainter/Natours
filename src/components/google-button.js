import React, { useCallback } from 'react';
import { styled, Button } from '@mui/material';

import googleImg from 'images/google.png';

const GoogleLoginButton = ({ text = 'continue with google' }) => {
  const handleClick = useCallback(() => {
    window.location.assign(
      `${
        process.env.GATSBY_SERVICE_URL
      }/auth/login?sourceUri=${encodeURIComponent(window.location.href)}`
    );
  }, []);

  return (
    <GoogleButton
      onClick={handleClick}
      variant='contained'
      startIcon={<GoogleIcon src={googleImg} />}>
      {text}
    </GoogleButton>
  );
};

const GoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 'max-content',
  boxShadow: '0 .5rem 1rem rgba(0,0,0,0.15)',
  textTransform: 'capitalize',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.grey[700],

  '&:hover, &:active': {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
  },
}));

const GoogleIcon = styled('img')({
  height: '2rem',
  width: '2rem',
});

export default GoogleLoginButton;
