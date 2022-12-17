import React from 'react';
import { Link } from 'gatsby';
import { Box, Stack, styled } from '@mui/material';

import { Grid } from 'ui';
import logoGreenImg from 'images/logo-green-2x.png';

const Footer = () => (
  <Foot>
    <Logo alt='Logo' src={logoGreenImg} />

    <Box mt={8}>
      <Grid columns={2} gap={20}>
        <Stack
          direction='row'
          alignItems='flex-start'
          justifyContent='space-between'
          borderTop='1px solid rgba(255,255,255,.4)'
          pt={2}>
          <ExternalLink to='/'>company</ExternalLink>
          <ExternalLink to='/'>contacts</ExternalLink>
          <ExternalLink to='/'>careers</ExternalLink>
          <ExternalLink to='/'>policy</ExternalLink>
          <ExternalLink to='/'>terms</ExternalLink>
        </Stack>
        <Box borderTop='1px solid rgba(255,255,255,.4)' pt={2}>
          <p>
            &copy; Copyright is a form of legal protection that gives you
            ownership rights to your original works. The moment you create a
            work of creative expression that falls within the scope of US
            copyright laws, it is automatically protected by law.
          </p>
        </Box>
      </Grid>
    </Box>
  </Foot>
);

const Foot = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(10),
  color: theme.palette.common.white,
}));

const Logo = styled('img')({
  width: '10rem',
  display: 'block',
  margin: '0 auto',
});

const ExternalLink = styled(Link)(({ theme }) => ({
  textTransform: 'uppercase',
  transition: 'all .3s',
  padding: theme.spacing(0.5, 1),

  '&:hover': {
    boxShadow: theme.shadows[2],
    color: theme.palette.primary.main,
    transform: 'rotate(8deg) scale(1.05)',
  },
}));

export default Footer;
