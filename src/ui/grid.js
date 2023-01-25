import React from 'react';
import { Box, styled } from '@mui/material';

const Grid = ({ children, columns = 3, gap = 5.5, ...rest }) => (
  <StyledGrid columns={columns} {...rest} gap={gap}>
    {children}
  </StyledGrid>
);

const StyledGrid = styled(Box)(({ theme, gap, columns, responsive = true }) => {
  let styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: theme.spacing(gap),
  };

  if (responsive) {
    styles = Object.assign(styles, {
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'none',
        justifyContent: 'center',
      },
    });
  }

  return styles;
});

export default Grid;
