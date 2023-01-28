import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Stack,
  styled,
  Typography,
} from '@mui/material';

import { Grid, Heading, Icon } from 'ui';

const QuickPoint = ({ element, mainText, subText }) => (
  <Stack direction='row' alignItems='center' gap={3}>
    {element}
    <Typography variant='body1' fontWeight={600} textTransform='uppercase'>
      {mainText}
    </Typography>
    <Typography textTransform='capitalize' variant='body2'>
      {subText}
    </Typography>
  </Stack>
);

const Briefing = ({ tour }) => (
  <Grid columns={2} gap={0} mt={theme => theme.margin.skewCover}>
    <GreyBox py={theme => theme.padding.skewCover}>
      <Container maxWidth='xs'>
        <Heading variant='h5' textAlign='left' mb={4}>
          quick facts
        </Heading>

        <Stack gap={1}>
          <QuickPoint
            element={<Icon name='Calendar' />}
            mainText='next date'
            subText={new Intl.DateTimeFormat().format(
              new Date(tour.startDates[0])
            )}
          />
          <QuickPoint
            element={<Icon name='BarChart' />}
            mainText='difficulty'
            subText={tour.difficulty}
          />
          <QuickPoint
            element={<Icon name='Users' />}
            mainText='participants'
            subText={tour.maxGroupSize}
          />
          <QuickPoint
            element={<Icon name='Star' />}
            mainText='rating'
            subText={`${tour.ratingsAverage} / 5`}
          />
        </Stack>

        <Heading variant='h5' textAlign='left' my={4}>
          your tour guides
        </Heading>

        <Stack gap={1}>
          {tour.guides.map((guide, i) => (
            <QuickPoint
              key={i}
              element={<Avatar alt={guide.name} src={guide.picture} />}
              mainText={guide.role}
              subText={guide.name}
            />
          ))}
        </Stack>
      </Container>
    </GreyBox>

    <Stack gap={4} p={10} pt={35}>
      <Heading variant='h5'>about {tour.title}</Heading>
      <p>{tour.description}</p>
    </Stack>
  </Grid>
);

const GreyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
}));

export default Briefing;
