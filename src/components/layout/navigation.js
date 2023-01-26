import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Avatar, styled, Toolbar, Tooltip } from '@mui/material';

import GoogleLoginButton from 'components/google-button';
import useUser from 'hooks/use-user';
import logoImg from 'images/logo-white.png';

const Navigation = () => {
  const { user } = useUser();

  return (
    <GlassyNav position='sticky'>
      <Navbar>
        <Link to='/'>
          <Logo src={logoImg} />
        </Link>

        {user ? (
          <Tooltip title={user.name} arrow>
            <Avatar alt={user.name} src={user.picture} />
          </Tooltip>
        ) : (
          <GoogleLoginButton />
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

export default Navigation;
