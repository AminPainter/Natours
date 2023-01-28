import React from 'react';
import { Stack, styled } from '@mui/material';

import Review from 'components/review';
import { Section } from 'ui';

const Reviews = ({ reviews }) => (
  <SectionWithBackground>
    <ScrollableReviews direction='row' gap={5}>
      {reviews.map(review => (
        <Review key={review.id} {...review} />
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
