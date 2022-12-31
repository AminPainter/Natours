import React from 'react';
import {
  AppBar,
  Avatar,
  Button,
  styled,
  Toolbar,
  Tooltip,
} from '@mui/material';

import useUser from 'hooks/use-user';
import logoImg from 'images/logo-white.png';
import googleImg from 'images/google.png';

const Navigation = () => {
  const { user } = useUser();

  return (
    <GlassyNav position='sticky'>
      <Navbar>
        <div>
          <Logo src={logoImg} />
        </div>

        {user ? (
          <Tooltip title={user.name} arrow>
            <Avatar alt={user.name} src={user.picture} />
          </Tooltip>
        ) : (
          <GoogleButton
            onClick={() => {
              location.assign(
                `${
                  process.env.GATSBY_SERVICE_URL
                }/auth/login?sourceUri=${encodeURIComponent(
                  window.location.href
                )}`
              );
            }}
            variant='contained'
            startIcon={<GoogleIcon src={googleImg} />}>
            continue with google
          </GoogleButton>
        )}
      </Navbar>
    </GlassyNav>
  );
};

const GlassyNav = styled(AppBar)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(1, 0),
  boxShadow: theme.shadows[20],
}));

const Navbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const Logo = styled('img')({
  width: '5rem',
});

const GoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: 'max-content',
  boxShadow: 'none',
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

export default Navigation;
