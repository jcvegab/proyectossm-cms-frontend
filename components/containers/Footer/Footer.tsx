import React, { FC } from 'react';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import { StyleProps } from '@interfaces/common';

interface Props extends StyleProps {
  id?: number;
}

const PrimaryFooter = styled.div`
  height: 90px;
  padding: 0 5%;
  margin: 0 auto;
  max-width: 1220px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 15px;
  }
`;

const SecondaryFooter = styled.div`
  height: 50px;
  background-color: blue;

  div {
    margin: 0 auto;
    max-width: 1220px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

const Header: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <footer>
      <PrimaryFooter>
        <Link href='/'>
          <a>
            <Image
              src='/psm.svg'
              alt='Proyectos San Marcos'
              width={126}
              height={50}
            />
          </a>
        </Link>
        <div>
          <Link href='/courses' passHref></Link>
          <Link href='/profile' passHref></Link>
          <Link href='/logout' passHref></Link>
          <Link href='/register' passHref></Link>
          <Link href='/login' passHref></Link>
        </div>
      </PrimaryFooter>
      <SecondaryFooter>
        <div>
          <p>Secondary Header</p>
        </div>
      </SecondaryFooter>
    </footer>
  );
};

export default Header;
