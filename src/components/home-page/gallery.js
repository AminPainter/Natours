import React from 'react';
import { Button, Stack, styled, Typography } from '@mui/material';

import { Section, Heading, Grid } from 'ui';
import galleryImg1 from 'images/nat-1.jpg';
import galleryImg2 from 'images/nat-2.jpg';
import galleryImg3 from 'images/nat-3.jpg';

const Gallery = () => (
  <Section mt={-20} pt={30} pb={30}>
    <Heading>exciting tours for adventurous people</Heading>

    <Grid columns={2} mt={15}>
      <Stack gap={3}>
        <Typography variant='h6' textTransform='uppercase' fontWeight={600}>
          You're going to fall in love with nature
        </Typography>

        <Typography variant='subtitle1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui.
        </Typography>

        <Typography variant='h6' textTransform='uppercase' fontWeight={600}>
          LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
        </Typography>

        <Typography variant='subtitle1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nulla deserunt voluptatum nam.
        </Typography>

        <Button>Learn more &nbsp; &rarr;</Button>
      </Stack>

      <Photos>
        <Photo src={galleryImg1} top='-2rem' />
        <Photo src={galleryImg2} top='2rem' right='0' />
        <Photo src={galleryImg3} top='6rem' left='20%' />
      </Photos>
    </Grid>
  </Section>
);

const Photos = styled('div')({
  position: 'relative',
});

const Photo = styled('img')(
  ({ theme, top = 'initial', left = 'initial', right = 'initial' }) => ({
    position: 'absolute',
    top,
    left,
    right,
    width: '20rem',
    boxShadow: '0 1.5rem 2rem rgba(0,0,0,0.2)',
    borderRadius: '3px',
    transition: 'all .2s',
    outline: '1rem solid transparent',
    outlineOffset: '1rem',

    '&:hover': {
      transform: 'scale(1.1)',
      outlineColor: theme.palette.primary.main,
      zIndex: 1,
    },
  })
);

export default Gallery;
