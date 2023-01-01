import React from 'react';
import { Container, Stack, styled, Typography } from '@mui/material';

import { Icon, Button } from 'ui';

const TourIntro = ({ tour }) => (
  <Header tourImg={tour.imageCover}>
    <Container maxWidth='sm'>
      <Typography
        mt={15}
        variant='h2'
        textAlign='center'
        textTransform='uppercase'>
        <TourHeading>{tour.name}</TourHeading>
      </Typography>

      <Stack direction='row' justifyContent='center' gap={2.5} mt={3}>
        <Stack direction='row' alignItems='center'>
          <Icon name='Clock' color='common.white' />
          <Typography color='common.white' variant='body1'>
            {tour.duration} days tour
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Icon name='MapPin' color='common.white' />
          <Typography color='common.white' variant='body1'>
            {tour.startLocation.description}
          </Typography>
        </Stack>
      </Stack>

      <Stack mt={3} alignItems='center'>
        <Button>start booking now &nbsp; &rarr;</Button>
      </Stack>
    </Container>
  </Header>
);

export default TourIntro;

const Header = styled('header')(({ theme, tourImg }) => ({
  height: '95vh',
  padding: theme.spacing(5),
  marginTop: theme.spacing(-10),
  backgroundImage: theme.utils.createGradient(tourImg),
  backgroundPosition: 'center',
  clipPath: theme.clipPath.singleWedge,
}));

const TourHeading = styled('span')(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  backgroundImage: theme.utils.createGradient(),
  boxDecorationBreak: 'clone',
  WebkitBoxDecorationBreak: 'clone',
  lineHeight: 1.5,
}));
