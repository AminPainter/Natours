import React from 'react';
import { Avatar, Stack, styled, Typography, Rating } from '@mui/material';

import { Icon } from 'ui';

const Review = ({ author, content, rating }) => (
  <ReviewCard gap={3}>
    <Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
      <Avatar alt={author.name} src={author.picture} />
      <Typography variant='h6' textTransform='uppercase' color='common.black'>
        {author.name}
      </Typography>
    </Stack>

    <Typography variant='body2' textAlign='center'>
      {content}
    </Typography>

    <RatingStars
      name='tour-rating'
      value={rating}
      precision={0.5}
      readOnly
      icon={<Icon name='Star' />}
      emptyIcon={<Icon name='Star' color='grey.400' />}
    />
  </ReviewCard>
);

const ReviewCard = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.borderRadius.tiny,
  padding: theme.spacing(2, 3),
  minWidth: '18rem',
}));

const RatingStars = styled(Rating)({
  display: 'flex',
  justifyContent: 'center',
});

export default Review;
