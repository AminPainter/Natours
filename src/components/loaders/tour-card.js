import React from 'react';
import { Skeleton, Stack, styled } from '@mui/material';

import { Grid } from 'ui';

const TourCardSkeleton = () => (
  <SkeletonContainer gap={5}>
    <SkeletonImg variant='rectangular' />

    <Stack px={3} gap={2}>
      <Skeleton variant='rectangular' width='70%' />
      <Skeleton variant='rectangular' />

      <Grid columns={2} mt={3} gap={3}>
        <Skeleton variant='rectangular' />
        <Skeleton variant='rectangular' />
        <Skeleton variant='rectangular' />
        <Skeleton variant='rectangular' />
      </Grid>
    </Stack>

    <SkeletonCta variant='rectangular' />
  </SkeletonContainer>
);

const SkeletonContainer = styled(Stack)({
  boxShadow: '0 .5rem 1rem rgba(0,0,0,0.1)',
});

const SkeletonImg = styled(Skeleton)(({ theme }) => ({
  clipPath: theme.clipPath.singleWedge,
  height: '15rem',
}));

const SkeletonCta = styled(Skeleton)({
  flex: '1 0 5.5rem',
});

export default TourCardSkeleton;
