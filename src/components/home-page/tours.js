import React from 'react';
import { Stack } from '@mui/material';

import { Section, Heading, Grid, Button } from 'ui';
import Tour from 'components/tour';
import TourCardSkeleton from 'components/loaders/tour-card';

import testImg1 from 'images/nat-5.jpg';
import testImg2 from 'images/nat-6.jpg';
import testImg3 from 'images/nat-7.jpg';

const gradients = [['#ffb900', '#ff7730'], undefined, ['#2998ff', '#5643fa']];

const data = [
  {
    title: 'The Sea Explorer',
    coverImage: testImg1,
  },
  {
    title: 'The Forest Hiker',
    coverImage: testImg2,
  },
  {
    title: 'The Snow Adventurer',
    coverImage: testImg3,
  },
];

const Tours = () => (
  <Section mt={-30} pt={30} pb={10}>
    <Heading>most popular tours</Heading>

    <Grid columns={3} my={10}>
      {data.map((tour, i) => (
        <Tour {...tour} key={i} gradient={gradients[i]} />
      ))}
      <TourCardSkeleton />
      <TourCardSkeleton />
      <TourCardSkeleton />
    </Grid>

    <Stack alignItems='center'>
      <Button variant='primary'>discover all tours</Button>
    </Stack>
  </Section>
);

export default Tours;
