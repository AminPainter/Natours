import React from 'react';
import { Box } from '@mui/material';

const Grid = ({ children, columns = 3, gap = 10, ...rest }) => (
  <Box
    display='grid'
    gridTemplateColumns={`repeat(${columns}, 1fr)`}
    gap={gap}
    {...rest}>
    {children}
  </Box>
);

export default Grid;
