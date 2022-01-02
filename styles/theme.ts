import { createTheme } from '@mui/material/styles';

export const emotionTheme = {
  button: {
    type: {
      primary: {
        color: 'white',
        bgColor: 'rgb(27, 61, 94)',
        borderColor: 'rgb(27, 61, 94)',
        hoverBgColor: 'rgb(27, 61, 94, 0.85)',
      },
      secondary: {
        color: 'white',
        bgColor: 'rgb(27, 61, 94)',
        borderColor: 'rgb(27, 61, 94)',
        hoverBgColor: 'rgb(27, 61, 94, 0.85)',
      },
      ghost: {
        color: 'rgb(27, 61, 94)',
        bgColor: 'transparent',
        borderColor: 'rgb(27, 61, 94)',
        hoverBgColor: 'rgba(27, 61, 94, 0.082)',
      },
    },
    size: {
      small: {
        padding: 14,
        fontSize: 13,
        lineHeight: 26,
      },
      medium: {
        padding: 20,
        fontSize: 16,
        lineHeight: 34,
      },
      large: {
        padding: 25,
        fontSize: 18,
        lineHeight: 38,
      },
    },
  },
  font: {
    color: {
      blue: 'rgb(27, 61, 94)',
      darkBlue: '#142C45',
      sky: '#4495EB',
      gray: '#616161',
      lightGray: '#8E8E8E',
      darkGray: '#373737',
      shallowGray: 'rgba(97, 97, 97, 0.15)',
      white: '#FFFFFF',
    },
    typography: {
      heading: 'Bebas Neue',
      body: 'Montserrat',
    },
  },
  // background: {
  //   1: '#F5F5F6',
  //   2: '#E1E2E1',
  //   3: '#FFFFFF',
  //   4: 'rgb(27, 61, 94)',
  // },
  // colors: {
  //   primary: 'string',
  //   secondary: 'string',
  //   optional: 'string',
  // },
};

// declare module '@mui/material/styles' {
//  export interface Theme {}
//  // allow configuration using `createTheme`
//  interface ThemeOptions {}
// }

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(27, 61, 94)',
    },
  },
});
