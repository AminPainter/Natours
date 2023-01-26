import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

import GoogleLoginButton from 'components/google-button';
import { Section, Heading, Button } from 'ui';
import loadScript from 'utils/load-script';
import { bookTour } from 'utils/query-functions';
import useUser from 'hooks/use-user';

const BookNow = ({ tour }) => {
  const [razorpay, setRazorpay] = useState();
  const { user } = useUser();
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      setRazorpay(
        await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      );
    })();
  }, []);

  const displayRazorpayPopup = useCallback(async () => {
    if (!razorpay) return;

    const order = await bookTour(tour.id);
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: 'INR',
      name: tour.name,
      description: `Payment for the tour ${tour.name}`,
      image: tour.imageCover,
      order_id: order.id,
      prefill: {
        name: user.name,
        email: user.email,
      },
      theme: {
        color: theme.palette.primary.main,
      },
    };

    const paymentPortal = new window.Razorpay(options);
    paymentPortal.open();
  }, [razorpay, tour, user, theme.palette.primary.main]);

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
            {tour.images.map((img, i) => (
              <AestheticImg key={i} alt='aesthetic' src={img} />
            ))}
          </Stack>

          <Box>
            <Heading variant='h5' textAlign='left'>
              What are you waiting for?
            </Heading>

            <Typography variant='body1'>
              {tour.duration} days. 1 adventure. Infinite memories. Make it all
              yours today!
            </Typography>
          </Box>

          {user ? (
            <Button variant='primary' onClick={displayRazorpayPopup}>
              book tour now!
            </Button>
          ) : (
            <GoogleLoginButton text='Login to book a tour' />
          )}
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

  '&:first-of-type': {
    zIndex: 10,
    transform: 'translate(-35%, -50%)',
  },

  '&:nth-of-type(2)': {
    transform: 'translate(-10%, -50%) scale(0.97)',
    zIndex: 9,
  },

  '&:nth-of-type(3)': {
    transform: 'translate(15%, -50%) scale(0.94)',
    zIndex: 8,
  },
}));

export default BookNow;
