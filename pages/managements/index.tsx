import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

import { H1 } from '@components/UI/Title';
import Card from '@components/containers/Card';

const StyledMain = styled.main`
  padding: 2% 4%;
  ${H1} {
    font-family: Montserrat;
  }
`;

const CardGridContainer = styled.div`
  margin: 0 auto;
  padding: 2%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ForCard = (
  <Card
    img_alt='management'
    img_src='assets/card-management.jpg'
    title='Gerencia de PMO'
    body='Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica. Lizards are
    a widespread group of squamate reptiles, with over 6,000 species,
    ranging across all continents except Antarctica.'
  />
);

const ManagementPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gerencias | Proyectos San Marcos</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledMain>
        <H1>Nuestras Gerencias</H1>
        <CardGridContainer>{Array(6).fill(ForCard)}</CardGridContainer>
      </StyledMain>
    </div>
  );
};

export default ManagementPage;
