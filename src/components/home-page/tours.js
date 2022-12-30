import React from 'react';
import { Stack } from '@mui/material';

import { Section, Heading, Grid, Button } from 'ui';
import { tours } from 'dev-data/data';
import Tour from 'components/tour';
import TourCardSkeleton from 'components/loaders/tour-card';

const gradients = [['#ffb900', '#ff7730'], undefined, ['#2998ff', '#5643fa']];

const Tours = () => (
  <Section mt={-30} pt={30} pb={10}>
    <Heading>most popular tours</Heading>

    <Grid columns={3} my={10}>
      {tours.map((tour, i) => (
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
