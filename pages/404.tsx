import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@components/UI/Button';

const NotFound = styled.div`
  margin: 50px auto;
  padding: 0 10%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .not-found__text {
    max-width: 45%;
  }

  .not-found__links {
    display: flex;
    gap: 24px;
  }
`;

export default function Custom404() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Error 404 | Proyectos San Marcos</title>
        <meta
          name='description'
          content='Somos un equipo multidisciplinario de la UNMSM que adopta, difunde y aplica las buenas practicas en gestión de proyectos'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <NotFound>
          <h1>Página no encontrada</h1>
          <p className='not-found__text'>
            La página que estás buscando no existe o ha sido cambiada. Te
            brindamos aquí otros links ...
          </p>
          <div className='not-found__links'>
            <Button kind='ghost' size='large' onClick={() => router.back()}>
              Volver
            </Button>
            <Link href='/' passHref>
              <Button size='large'>Ir al inicio</Button>
            </Link>
          </div>
        </NotFound>
      </main>
    </div>
  );
}
