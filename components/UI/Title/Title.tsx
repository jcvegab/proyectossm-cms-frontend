import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface EmotionTheme {
  theme: Theme;
}

const BaseHeading = ({ theme }: EmotionTheme) =>
  css`
    color: ${theme.font.color.blue};
    font-family: ${theme.font.typography.heading};
  `;

export const H1 = styled.h1`
  ${BaseHeading}
  font-size: 32px;
  line-height: 40px;
`;

export const H2 = styled.h2`
  ${BaseHeading}
  font-size: 28px;
  line-height: 35px;
`;

export const H3 = styled.h3`
  ${BaseHeading}
  font-size: 24px;
  line-height: 30px;
`;

export const H4 = styled.h4`
  ${BaseHeading}
  font-size: 20px;
  line-height: 25px;
`;

export const H5 = styled.h5`
  ${BaseHeading}
  font-size: 16px;
  line-height: 20px;
`;

export {};

// interface Props {
//   family?: boolean;
//   level?: 15;
// }

// const Heading = styled.span<Props>(({ theme, level = 0, family = false }) => {
//   return `
//   color: ${theme.font.color.blue};
//   font-family: ${
//     theme.font.typography.heading
//   };
//   font-size: ${theme.heading[level].size};
//   line-height: ${theme.heading[level].lineHeight};
// `;
// });

// const H1 = Heading.withComponent('h1');
// const H2 = Heading.withComponent('h2');
// const H3 = Heading.withComponent('h3');
// const H4 = Heading.withComponent('h4');
// const H5 = Heading.withComponent('h5');

// export { H1, H2, H3, H4, H5 };
