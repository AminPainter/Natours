import React from 'react';
import { styled } from '@mui/material';
import { Grid } from 'ui';

import testImg1 from 'images/nat-7.jpg';
import testImg2 from 'images/nat-8.jpg';
import testImg3 from 'images/nat-9.jpg';

const Gallery = () => (
  <SkewedGrid gap={0} mt={-25}>
    <GalleryPhoto alt='Gallery 1' src={testImg1} />
    <GalleryPhoto alt='Gallery 2' src={testImg2} />
    <GalleryPhoto alt='Gallery 3' src={testImg3} />
  </SkewedGrid>
);

const SkewedGrid = styled(Grid)(({ theme }) => ({
  clipPath: theme.clipPath.dualWedge,
}));

const GalleryPhoto = styled('img')({
  height: '25rem',
  width: '100%',
  objectFit: 'cover',
});

export default Gallery;
