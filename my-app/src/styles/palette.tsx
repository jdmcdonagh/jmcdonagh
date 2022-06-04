import * as React from 'react';
import { PaletteMode, ThemeOptions } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';


export const customTheme = (mode: PaletteMode) => {
  return (mode == 'light' ? lightMode : darkMode);
};

const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#000',
      secondary: '#007FFF',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
};

const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#007FFF',
      light: '#3398FF',
      dark: '#0058B2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0A1929',
      light: '#112240',
      dark: '#07111C',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#007FFF',
    },
    background: {
      default: '#0A1929',
      paper: '#fff',
    },
    divider: 'rgba(194, 224, 255, 0.08)',
  },
};
