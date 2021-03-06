import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '@components/UI/Button';
import CoverImage from '@components/UI/CoverImage';
import FloatButton from '@components/UI/FloatButton';
import { H2 } from '@components/UI/Title/Title';
import UnderlineText from '@components/UI/UnderlineText';
import InputForm from '@components/forms/InputForm';

const BaseContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const LoginContainer = styled.div(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
`,
);

const LoginCard = styled(Box)(
  ({ theme }) => `
  width: 100%;
  max-width: 400px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.palette.primary.main};
  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 30px;

  ${H2} {
    font-family: ${theme.font.typography.body};
    font-size: 20px;
    line-height: 25px;
  }
`,
);

const RegisterPage: NextPage = () => {
  return (
    <>
      <BaseContainer>
        <Head>
          <title>Registro | Proyectos San Marcos</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Link href='/' passHref>
          <FloatButton extended>Ir al inicio</FloatButton>
        </Link>
        <GridContainer>
          <CoverImage />
          <LoginContainer>
            <LoginCard>
              <H2>Registro en Intranet PSM</H2>
              <InputForm label='E-mail' placeholder='Ingresa tu email' />
              <InputForm
                type='password'
                label='Contraseña'
                placeholder='Ingresa tu nueva contraseña'
              />
              <InputForm
                type='password'
                label='Validación de contraseña'
                placeholder='Vuelve a ingresar tu contraseña'
              />
              <Button variant='contained' fullWidth>
                Registrar
              </Button>
              <UnderlineText>o</UnderlineText>
              <Button variant='contained' fullWidth disabled>
                Regístrate con Google
              </Button>
              <Button variant='contained' fullWidth disabled>
                Regístrate con Facebook
              </Button>
              <span>¿Ya tienes una cuenta?</span>
              <Link href='/login' passHref>
                <Button kind='ghost' fullWidth>
                  Inicia sesión ahora
                </Button>
              </Link>
            </LoginCard>
          </LoginContainer>
        </GridContainer>
      </BaseContainer>
    </>
  );
};

export default RegisterPage;
