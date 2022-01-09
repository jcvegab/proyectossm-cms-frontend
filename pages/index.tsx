import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '@components/UI/Button';
import { H1 } from '@components/UI/Title';
import Footer from '@components/containers/Footer';
import Header from '@components/containers/Header';

const StyledImage = styled(Image)``;

const Banner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2% 4%;
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 50%, transparent 100%);

  .info__banner {
    width: 40%;
    margin: 0 80px;
    height: 100%;
    position: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 16px;

    ${H1} {
      color: white;
      text-align: right;
      font-size: 54px;
      line-height: 50px;
      letter-spacing: 2px;
    }
  }

  ${StyledImage} {
    object-fit: cover;
    z-index: -1;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Proyectos San Marcos</title>
        <meta
          name='description'
          content='Somos un equipo multidisciplinario de la UNMSM que adopta, difunde y aplica las buenas practicas en gestión de proyectos'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Banner>
          <StyledImage
            src='/assets/main-join.jpg'
            alt='Volunteer Proyectos San Marcos'
            layout='fill'
          />
          <div className='info__banner'>
            <H1>¿Quieres saber más de nosotros?</H1>
            <Button size='large'>Postula aquí</Button>
          </div>
        </Banner>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
