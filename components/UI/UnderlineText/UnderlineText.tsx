import React, { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

import Underline from '../Underline';

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

const UnderlineText: FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <Container>
      <Underline />
      <span>{children}</span>
      <Underline />
    </Container>
  );
};

export default UnderlineText;
