import React from 'react';
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
          <ExternalLink target='_blank' href='https://aminpainter.netlify.app/'>
            portfolio
          </ExternalLink>
          <ExternalLink target='_blank' href='https://github.com/AminPainter'>
            github
          </ExternalLink>
          <ExternalLink
            target='_blank'
            href='https://www.instagram.com/amin_painter/'>
            instagram
          </ExternalLink>
          <ExternalLink
            target='_blank'
            href='https://github.com/AminPainter/natours-app'>
            frontend
          </ExternalLink>
          <ExternalLink
            target='_blank'
            href='https://github.com/AminPainter/natours-core'>
            backend
          </ExternalLink>
        </Stack>
        <Box borderTop='1px solid rgba(255,255,255,.4)' pt={2}>
          <p>
            &copy; Copyright 2023 - 2053. Built by
            <ExternalLink
              target='_blank'
              href='https://aminpainter.netlify.app/'>
              Mohammed Amin Painter.
            </ExternalLink>
            Inspired by
            <ExternalLink
              target='_blank'
              href='https://twitter.com/jonasschmedtman'>
              Jonas Schmedtman.
            </ExternalLink>
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

const ExternalLink = styled('a')(({ theme }) => ({
  display: 'inline-block',
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
