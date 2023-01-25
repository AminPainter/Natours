import React from 'react';
import { Link } from 'gatsby';
import {
  Card,
  CardContent,
  CardActions,
  Stack,
  styled,
  Typography,
  Box,
} from '@mui/material';

import { Button, Grid, Icon } from 'ui';

const TourBullet = ({ icon, text }) => (
  <Stack direction='row' alignItems='center'>
    <Icon name={icon} />
    <Typography variant='subtitle2'>{text}</Typography>
  </Stack>
);

const Tour = ({ gradient, tour }) => (
  <TourCard>
    <TourHeader>
      <TourMedia gradient={gradient} img={tour.imageCover} />
      <TourTitleBox variant='h5'>
        <TourTitle gradient={gradient}>{tour.name}</TourTitle>
      </TourTitleBox>
    </TourHeader>

    <TourSummary>
      <Typography textTransform='uppercase' fontWeight={600} variant='body1'>
        {tour.difficulty} {tour.duration}-day tour
      </Typography>
      <Typography mt={2} fontStyle='italic' variant='body2'>
        {tour.summary}
      </Typography>
      <Grid columns={2} mt={3} gap={1} responsive={false}>
        <TourBullet icon='MapPin' text={tour.startLocation.description} />
        <TourBullet
          icon='Calendar'
          text={new Intl.DateTimeFormat(navigator.language, {
            month: 'long',
            year: 'numeric',
          }).format(new Date(tour.startDates[0]))}
        />
        <TourBullet icon='Flag' text={`${tour.locations.length} stops`} />
        <TourBullet icon='User' text={`${tour.maxGroupSize} people`} />
      </Grid>
    </TourSummary>

    <TourCta>
      <Stack gap={1}>
        <Typography variant='body1'>
          <Typography
            component='span'
            variant='body1'
            fontWeight={600}
            mr={0.5}>
            ${tour.price}
          </Typography>
          per person
        </Typography>
        <Typography variant='body1'>
          <Typography
            component='span'
            variant='body1'
            fontWeight={600}
            display='inline'
            mr={0.5}>
            {tour.ratingsAverage.toFixed(1)}
          </Typography>
          rating
        </Typography>
      </Stack>
      <Button component={Link} to={`/tours/${tour.slug}`} variant='primary'>
        details
      </Button>
    </TourCta>
  </TourCard>
);

const TourCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.borderRadius.tiny,
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 .5rem 1rem rgba(0,0,0,0.1)',
}));

const TourHeader = styled('div')({
  position: 'relative',
  height: '15rem',
});

const TourMedia = styled(Box)(
  ({
    theme,
    img,
    gradient = [theme.palette.primary.light, theme.palette.primary.dark],
  }) => ({
    height: '100%',
    clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 98%)',
    backgroundImage: `linear-gradient(to right bottom, ${gradient[0]}, ${gradient[1]}), url(${img})`,
    backgroundBlendMode: 'screen',
    backgroundSize: 'cover',
  })
);

const TourTitleBox = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  width: '60%',
  right: theme.spacing(3),
  bottom: 0,
  zIndex: 100,
  textAlign: 'right',
  textTransform: 'uppercase',
}));

const TourTitle = styled('span')(
  ({
    theme,
    gradient = [theme.palette.primary.light, theme.palette.primary.dark],
  }) => ({
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundImage: `linear-gradient(to right bottom, ${gradient[0]}, ${gradient[1]})`,
    boxDecorationBreak: 'clone',
    WebkitBoxDecorationBreak: 'clone',
    lineHeight: 2,
  })
);

const TourSummary = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3.5),
}));

const TourCta = styled(CardActions)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
  justifyContent: 'space-between',
}));

export default Tour;
