import React from 'react';
import { Card, CardContent, Stack, styled, Typography } from '@mui/material';

import { Section, Grid, Icon } from 'ui';
import backgroundImg from 'images/nat-4.jpg';

const feats = [
  {
    icon: 'Globe',
    title: 'explore the world',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'Compass',
    title: 'meet nature',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'Map',
    title: 'find your way',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'Heart',
    title: 'live a healthier life',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
];

const Feature = ({ icon, title, text }) => (
  <FeatureCard>
    <Stack alignItems='center'>
      <Icon name={icon} size={70} />
    </Stack>
    <CardContent>
      <Typography
        my={2}
        textAlign='center'
        variant='h6'
        textTransform='uppercase'>
        {title}
      </Typography>
      <Typography textAlign='center' variant='body1'>
        {text}
      </Typography>
    </CardContent>
  </FeatureCard>
);

const Features = () => (
  <SectionWithBackground>
    <Grid columns={4} gap={7.5}>
      {feats.map((feat, i) => (
        <Feature key={i} {...feat} />
      ))}
    </Grid>
  </SectionWithBackground>
);

export default Features;

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4, 1.5, 2),
  backgroundColor: 'rgba(255, 255, 255, .85)',
  transition: 'all .3s',

  '&:hover': {
    transform: 'translateY(-1rem) scale(1.05)',
    boxShadow: theme.shadows[24],
  },
}));

const SectionWithBackground = styled(Section)(({ theme }) => ({
  backgroundImage: theme.utils.createGradient(backgroundImg),
  backgroundPosition: 'top',
  marginTop: theme.spacing(-25),
  padding: theme.spacing(30, 0, 50),
  clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)',
}));
