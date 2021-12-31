import React, { FC } from 'react';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { RiShoppingCart2Line } from 'react-icons/ri';

// import { useDispatch, useSelector } from 'react-redux';

import { StyleProps } from '../../../interfaces/common';

interface Props extends StyleProps {
  id?: number;
  // onChange: (selection: CardAlignment[]) => void;
}

const PrimaryHeader = styled.div`
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

const SecondaryHeader = styled.div`
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
  // const dispatch = useDispatch();
  // const role = useSelector((state) => state) || null;

  const role = false;

  return (
    <header>
      <PrimaryHeader>
        <Image
          src='/psm.svg'
          alt='Proyectos San Marcos'
          width={126}
          height={50}
        />
        <div>
          <Button variant='outlined'>Cursos</Button>
          {(role && (
            <>
              <Button variant='outlined'>Mi perfil</Button>
              <Button variant='contained'>Salir</Button>
            </>
          )) || (
            <>
              <Button variant='outlined'>Regístrate</Button>
              <Button variant='contained'>Ingresa</Button>
            </>
          )}
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <RiShoppingCart2Line />
          </IconButton>
        </div>
      </PrimaryHeader>
      <SecondaryHeader>Secondary Header</SecondaryHeader>
    </header>
  );
};

export default Header;
