import '@emotion/react';
import { createTheme } from '@mui/material/styles';

interface BaseTheme {
  fonts: {
    colors: {
      dark: string;
      mid: string;
      ligth: string;
      other: {
        blue: 'rgb(27, 61, 94)';
        darkBlue: '#142C45';
        sky: '#4495EB';
        gray: '#616161';
        lightGray: '#8E8E8E';
        darkGray: '#373737';
        shallowGray: 'rgba(97, 97, 97, 0.15)';
        white: '#FFFFFF';
      };
    };
    typography: {
      heading: 'Bebas Neue';
      body: 'Montserrat';
    };
  };
  background: {
    1: '#F5F5F6';
    2: '#E1E2E1';
    3: '#FFFFFF';
    4: 'rgb(27, 61, 94)';
  };
  colors: {
    primary: string;
    secondary: string;
    optional: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme extends BaseTheme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: 'orange',
  },
});

// declare module '@emotion/react' {
//   export interface Theme extends BaseTheme {
//     unk: {

//     }
//   }
// }
