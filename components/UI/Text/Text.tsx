import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface EmotionTheme {
  theme: Theme;
}

const BaseBodyText = ({ theme }: EmotionTheme) =>
  css`
    font-family: ${theme.font.typography.body};
    color: ${theme.font.color.darkGray};
  `;

export const Subtitle1 = styled.p`
  ${BaseBodyText}
  font-size: 16px;
  line-height: 24px;
`;

export const Subtitle2 = styled.p`
  ${BaseBodyText}
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const Body1 = styled.p`
  ${BaseBodyText}
  font-size: 16px;
  line-height: 24px;
`;

export const Body2 = styled.p`
  ${BaseBodyText}
  font-size: 14px;
  line-height: 20px;
`;

export const BtnText = styled.span`
  ${BaseBodyText}
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
`;

export const Caption = styled.span`
  ${BaseBodyText}
  font-size: 12px;
  line-height: 16px;
`;

export const Overline = styled.span`
  ${BaseBodyText}
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`;
