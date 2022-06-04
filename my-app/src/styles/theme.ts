import { createGlobalStyle } from 'styled-components';

type Theme = {
  palette: {
    mode: string,
    primary: {
      main: string,
      light: string,
      dark: string,
    },
    secondary: {
      main: string,
      light: string,
      dark: string,
    },
    text: {
      primary: string,
      secondary: string,
    },
    background: {
      page: string,
    }
    seperator: string,
  }
};

export const GlobalStyles = createGlobalStyle<{theme: Theme}>`
  body {
    background: ${({ theme }) => theme.palette.background.page};
    color: ${({ theme }) => theme.palette.text.primary};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme: Theme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#007FFF',
    },
    background: {
      page: '#fff',
    },
    seperator: 'rgba(194, 224, 255, 0.08)',
  },
};

export const darkTheme: Theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#007FFF',
      light: '#3398FF',
      dark: '#0058B2',
    },
    secondary: {
      main: '#0A1929',
      light: '#112240',
      dark: '#07111C',
    },
    text: {
      primary: '#fff',
      secondary: '#007FFF',
    },
    background: {
      page: '#0A1929',
    },
    seperator: 'rgba(194, 224, 255, 0.08)',
  },
};
