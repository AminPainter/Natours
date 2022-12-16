import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from '@mui/material';

import { Section, Grid } from 'ui';
import backgroundImg from 'images/nat-4.jpg';

const feats = [
  {
    icon: 'A',
    title: 'explore the world',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'B',
    title: 'meet nature',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'C',
    title: 'find your way',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
  {
    icon: 'D',
    title: 'live a healthier life',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
  },
];

const Feature = ({ icon, title, text }) => (
  <FeatureCard>
    <CardHeader>{icon}</CardHeader>
    <CardContent>
      <Typography
        mt={2}
        textAlign='center'
        variant='h6'
        textTransform='uppercase'>
        {title}
      </Typography>
      <Typography mt={2} textAlign='center' variant='body2'>
        {text}
      </Typography>
    </CardContent>
  </FeatureCard>
);

const Features = () => (
  <SectionWithBackground>
    <Grid columns={4} gap={6}>
      {feats.map(feat => (
        <Feature {...feat} />
      ))}
    </Grid>
  </SectionWithBackground>
);

export default Features;

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1.5),
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
  clipPath: 'polygon(0 20vh, 100% 0, 100% 80vh, 0 100%)',
}));
