import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@components/containers/Footer';
import Header from '@components/containers/Header';

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
      <Footer />
    </div>
  );
};

export default Home;
