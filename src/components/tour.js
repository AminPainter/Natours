import React from 'react';
import { Link } from 'gatsby';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { Button, Grid, Icon } from 'ui';

const TourBullet = ({ icon, text }) => (
  <Stack direction='row' alignItems='center'>
    <Icon name={icon} />
    <Typography variant='subtitle2'>{text}</Typography>
  </Stack>
);

const Tour = ({ gradient, imageCover, name, slug }) => (
  <TourCard>
    <TourHeader>
      <TourMedia gradient={gradient} img={imageCover} />
      <TourTitleBox variant='h5'>
        <TourTitle gradient={gradient}>{name}</TourTitle>
      </TourTitleBox>
    </TourHeader>

    <TourSummary>
      <Typography textTransform='uppercase' fontWeight={600} variant='body1'>
        medium 7-day tour
      </Typography>
      <Typography mt={2} fontStyle='italic' variant='body2'>
        Exploring the jaw-dropping US east coast by foot and by boat
      </Typography>

      <Grid columns={2} mt={3} gap={1}>
        <TourBullet icon='MapPin' text='Miami, USA' />
        <TourBullet icon='Calendar' text='June 2022' />
        <TourBullet icon='Flag' text='4 stops' />
        <TourBullet icon='User' text='15 people' />
      </Grid>
    </TourSummary>

    <TourCta>
      <Stack gap={1}>
        <Typography variant='body1'>$479 per person</Typography>
        <Typography variant='body1'>4.3 rating</Typography>
      </Stack>
      <Button component={Link} to={`/tours/${slug}`} variant='primary'>
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

const TourMedia = styled(CardMedia)(
  ({
    theme,
    img,
    gradient = [theme.palette.primary.light, theme.palette.primary.dark],
  }) => ({
    height: '100%',
    clipPath: theme.clipPath.singleWedge,
    backgroundImage: `linear-gradient(to right bottom, ${gradient[0]}, ${gradient[1]}), url(${img})`,
    backgroundBlendMode: 'screen',
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
