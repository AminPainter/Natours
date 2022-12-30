import React from 'react';
import { Stack, styled, Typography } from '@mui/material';

import { Button } from 'ui';
import heroImg from 'images/hero.jpg';
import logoImg from 'images/logo-white.png';

const Hero = () => (
  <Header>
    <div>
      <Logo src={logoImg} />
    </div>

    <Stack gap={4} alignItems='center' justifyContent='center' mt={15}>
      <HeadingPrimary variant='h1'>outdoors</HeadingPrimary>
      <HeadingSecondary variant='h6'>is where life happens</HeadingSecondary>
      <Button>discover our tours</Button>
    </Stack>
  </Header>
);

const Header = styled('header')(({ theme }) => ({
  height: '95vh',
  padding: theme.spacing(5),
  backgroundImage: theme.utils.createGradient(heroImg),
  backgroundPosition: 'top',
  clipPath: theme.clipPath.singleWedge,
}));

const Logo = styled('img')({
  width: '5rem',
});

const HeadingPrimary = styled(Typography)(({ theme }) => ({
  letterSpacing: '1.5rem',
  fontSize: '5rem',
  textTransform: 'uppercase',
  color: theme.palette.grey[200],
  fontWeight: 400,
}));

const HeadingSecondary = styled(HeadingPrimary)({
  letterSpacing: '1rem',
  fontSize: '1.25rem',
  wordSpacing: '1rem',
  fontWeight: 800,
  textShadow: '0 .5rem 1rem rgba(0,0,0,0.15)',
});

export default Hero;
