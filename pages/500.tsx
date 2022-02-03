import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@components/UI/Button';

const Crashed = styled.div`
  margin: 50px auto;
  padding: 0 10%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .crashed__text {
    max-width: 45%;
  }

  .crashed__links {
    display: flex;
    gap: 24px;
  }
`;

export default function Custom500() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Error 500 | Proyectos San Marcos</title>
        <meta
          name='description'
          content='Somos un equipo multidisciplinario de la UNMSM que adopta, difunde y aplica las buenas practicas en gestión de proyectos'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Crashed>
          <h1>Ocurrío un error en nuestro servidor</h1>
          <p className='crashed__text'>
            Intenta recargar la página o vuelve más tarde ...
          </p>
          <div className='crashed__links'>
            <Button kind='ghost' size='large' onClick={() => router.back()}>
              Volver
            </Button>
            <Link href='/' passHref>
              <Button size='large'>Ir al inicio</Button>
            </Link>
          </div>
        </Crashed>
      </main>
    </div>
  );
}
