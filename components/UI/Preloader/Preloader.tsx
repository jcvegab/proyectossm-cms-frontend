import React, { FC } from 'react';

import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

interface Props {
  overlap?: boolean;
}

const PreloaderBox = styled.div<Props>`
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  width: ${props => (props.overlap ? '100vh' : '100%')};
  height: ${props => (props.overlap ? 'vh' : '%')};
  position: ${props => (props.overlap ? 'fixed' : 'relative')};
  minHeight: ${props => props.overlap || 180};
  top: ${props => props.overlap && 0};
  left: ${props => props.overlap && 0};
`;

const Preloader: FC<Props> = (props: Props) => {
  const { overlap = false } = props;

  return (
    <PreloaderBox overlap={overlap}>
      <CircularProgress color='primary' />
    </PreloaderBox>
  );
};

export default Preloader;
