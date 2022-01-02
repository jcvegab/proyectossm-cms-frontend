import React, { FC } from 'react';

import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

interface Props {
  overlap?: boolean;
}

const PreloaderBox = styled.div<Props>(
  ({ overlap }) => `
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  width: ${overlap ? '100vh' : '100%'};
  height: ${overlap ? 'vh' : '%'};
  position: ${overlap ? 'fixed' : 'relative'};
  minHeight: ${overlap || 180};
  top: ${overlap && 0};
  left: ${overlap && 0};
`,
);

const Preloader: FC<Props> = (props: Props) => {
  const { overlap = false } = props;

  return (
    <PreloaderBox overlap={overlap}>
      <CircularProgress color='primary' />
    </PreloaderBox>
  );
};

export default Preloader;
