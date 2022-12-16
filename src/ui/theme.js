import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#55c57a',
      light: '#7ed56f',
      dark: '#28b485',
    },
  },

  typography: {
    allVariants: {
      fontFamily: `'Lato', sans-serif`,
      color: '#777',
    },
  },

  borderRadius: {
    large: '10rem',
  },

  utils: {
    createGradient(img) {
      return `linear-gradient(to right bottom, rgba(126, 213, 111, .8), rgba(40, 180, 133, .8)), url(${img})`;
    },
  },
});
