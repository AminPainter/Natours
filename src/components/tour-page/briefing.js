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
import testImg from 'images/nat-8.jpg';

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
  <Grid columns={2} gap={0} mt={-20}>
    <GreyBox py={35}>
      <Container maxWidth='xs'>
        <Heading variant='h5' textAlign='left' mb={4}>
          quick facts
        </Heading>

        <Stack gap={1}>
          <QuickPoint
            element={<Icon name='Calendar' />}
            mainText='next date'
            subText={tour?.startDates[0]}
          />
          <QuickPoint
            element={<Icon name='BarChart' />}
            mainText='difficulty'
            subText={tour?.difficulty}
          />
          <QuickPoint
            element={<Icon name='Users' />}
            mainText='participants'
            subText={tour?.maxGroupSize}
          />
          <QuickPoint
            element={<Icon name='Star' />}
            mainText='rating'
            subText={`${tour?.ratingsAverage} / 5`}
          />
        </Stack>

        <Heading variant='h5' textAlign='left' my={4}>
          your tour guides
        </Heading>

        <Stack gap={1}>
          {tour?.guides.map(guide => (
            <QuickPoint
              element={<Avatar alt={guide.name} src={testImg} />}
              mainText={guide.role}
              subText={guide.name}
            />
          ))}
        </Stack>
      </Container>
    </GreyBox>

    <Stack gap={4} p={10} pt={35}>
      <Heading variant='h5'>about {tour?.title}</Heading>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
    </Stack>
  </Grid>
);

const GreyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
}));

export default Briefing;
