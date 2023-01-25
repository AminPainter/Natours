import React from 'react';
import { Stack, styled } from '@mui/material';

import Review from 'components/review';
import { Section } from 'ui';

const dummyData = [
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
  {
    author: {
      name: 'Amin Painter',
      picture: 'adasd',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    rating: 3.5,
  },
];

const Reviews = ({ reviews = dummyData }) => (
  <SectionWithBackground>
    <ScrollableReviews direction='row' gap={5}>
      {reviews.map(review => (
        <Review {...review} />
      ))}
    </ScrollableReviews>
  </SectionWithBackground>
);

const SectionWithBackground = styled(Section)(({ theme }) => ({
  backgroundImage: theme.utils.createGradient(),
  marginTop: theme.margin.skewCover,
  padding: theme.spacing(theme.padding.skewCover, 0),
  clipPath: theme.clipPath.dualWedge,
}));

const ScrollableReviews = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export default Reviews;
