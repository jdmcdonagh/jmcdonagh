import { mergeDeep } from '../utils/mergeThemes';

export type Theme = {
  palette: {
    mode: string,
    common: {
      white: string,
      black: string,
    },
    primary: {
      dark: string,
      main: string,
      light: string,
      lighter: string,
    },
    secondary: {
      dark: string,
      main: string,
      light: string,
      lighter: string,
    },
    other: {
      green: string,
      blue: string,
      pink: string,
    },
    text: {
      primary: string,
      secondary: string,
    },
    background: {
      page: string,
    },
    seperator: string,
  },
  shadow: string[],
  size: {
    text: {
      xxs: string,
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
      subheading: string,
      heading: string,
    },
  },
  transitions: {
    all: string,
    easing: {
      default: string,
      inOut: string,
    },
    duration: {
      enteringScreen: number,
      leavingScreen: number,
    },
  },
  media: {
    mobile: string,
  },
};

const baseTheme = {
  palette: {
    mode: 'base',
    common: {
      white: '#fff',
      black: '#000',
    },
  },
  size: {
    text: {
      xxs: 'clamp(8px, 5vw, 12px)',
      xs: 'clamp(9px, 5vw, 13px)',
      sm: 'clamp(10px, 5vw, 14px)',
      md: 'clamp(12px, 5vw, 16px)',
      lg: 'clamp(14px, 5vw, 18px)',
      xl: 'clamp(16px, 5vw, 20px)',
      xxl: 'clamp(18px, 5vw, 22px)',
      subheading: 'clamp(24px, 5vw, 28px)',
      heading: 'clamp(20px, 5vw, 32px)',
    },
  },
  shadow: [
    '0 10px 30px -15px #000',
    '0 20px 30px -15px #000',
  ],
  transitions: {
    all: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    easing: {
      default: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  media: {
    mobile: '@media (max-width: 768px)',
  },
}

export const lightTheme: Theme = mergeDeep({}, baseTheme, {
  palette: {
    mode: 'light',
    primary: {
      dark: '#fff',
      main: '#fff',
      light: '#eee',
      lighter: '#fff',
    },
    secondary: {
      dark: '#fff',
      main: '#fff',
      light: '#fff',
      lighter: '#fff',
    },
    other: {
      green: '#64ffda',
      blue: '#57cbff',
      pink: '#f57dff',
    },
    text: {
      primary: '#000',
      secondary: '#007FFF',
    },
    background: {
      page: '#fff',
    },
    seperator: 'rgba(0, 0, 0, 0.08)',
  },
});

export const darkTheme: Theme = mergeDeep({}, baseTheme, {
  palette: {
    mode: 'dark',
    primary: {
      dark: '#020c1b',
      main: '#0a192f',
      light: '#112240',
      lighter: '#233554',
    },
    secondary: {
      dark: '#495670',
      main: '#8892b0',
      light: '#a8b2d1',
      lighter: '#ccd6f6',
    },
    other: {
      green: '#64ffda',
      blue: '#57cbff',
      pink: '#f57dff',
    },
    text: {
      primary: '#fff',
      secondary: '#007FFF',
    },
    background: {
      page: '#0A1929',
    },
    seperator: 'rgba(255, 255, 255, 0.08)',
  },
});
