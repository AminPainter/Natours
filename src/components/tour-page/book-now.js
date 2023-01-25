import { Box, Container, Stack, styled, Typography } from '@mui/material';
import React from 'react';

import { Section, Heading, Button } from 'ui';

const BookNow = ({ duration, images }) => {
  return (
    <Section
      mt={theme => theme.margin.skewCover}
      py={theme => theme.padding.skewCover}>
      <Book maxWidth='lg'>
        <Stack
          direction='row'
          gap={5}
          justifyContent='space-between'
          alignItems='center'>
          <Stack direction='row'>
            {images.map(img => (
              <AestheticImg alt='aesthetic' src={img} />
            ))}
          </Stack>

          <Box>
            <Heading variant='h5' textAlign='left'>
              What are you waiting for?
            </Heading>

            <Typography variant='body1'>
              {duration} days. 1 adventure. Infinite memories. Make it all yours
              today!
            </Typography>
          </Box>

          <Button variant='primary'>book tour now!</Button>
        </Stack>
      </Book>
    </Section>
  );
};

const Book = styled(Container)(({ theme }) => ({
  boxShadow: theme.shadows[20],
  borderRadius: '1rem',
  padding: theme.spacing(8, 4),
  overflow: 'hidden',
  position: 'relative',
}));

const AestheticImg = styled('img')(({ theme }) => ({
  height: '7rem',
  width: '7rem',
  borderRadius: theme.borderRadius.large,
  backgroundColor: theme.palette.primary.main,
  objectFit: 'cover',
  position: 'absolute',
  left: 0,
  top: '50%',

  '&:first-child': {
    zIndex: 10,
    transform: 'translate(-35%, -50%)',
  },

  '&:nth-child(2)': {
    transform: 'translate(-10%, -50%) scale(0.97)',
    zIndex: 9,
  },

  '&:nth-child(3)': {
    transform: 'translate(15%, -50%) scale(0.94)',
    zIndex: 8,
  },
}));

export default BookNow;
