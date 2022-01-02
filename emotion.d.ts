import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

interface ButtonType {
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBgColor: string;
}

interface ButtonSize {
  padding: number;
  fontSize: number;
  lineHeight: number;
}

// interface HeadingType {
//   size: string;
//   lineHeight: string;
// }

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    button: {
      type: {
        [key: string]: ButtonType;
      };
      size: {
        [key: string]: ButtonSize;
      };
    };
    font: {
      color: {
        [key: string]: string;
      };
      typography: {
        [key: string]: string;
      };
    };
    // heading: HeadingType[];
  }
}
