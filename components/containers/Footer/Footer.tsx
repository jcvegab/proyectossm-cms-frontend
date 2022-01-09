import React, { FC } from 'react';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import IconButton from '@components/UI/IconButton';
import { IconListType } from '@components/UI/IconButton/IconButton';
import { StyleProps } from '@interfaces/common';

// import Image from 'next/image';

interface Props extends StyleProps {
  id?: number;
}

const StyledFooter = styled.footer(
  ({ theme }) => `
  font-family: Montserrat;
  color: white;
  background-color: ${theme.palette.primary.main};

  .container__footer {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 5%;
  }

  .info__footer {
    padding: 30px 0;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
    .org_info_footer {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  .info-section__footer {
    padding: 0 15px;
    border-right: 1px solid white;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      text-decoration: none;
      color: white;
    }
  }

  .disclaimer__footer {
    height: 35px;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,
);

interface Social {
  link: string;
  icon: IconListType;
}

const SocialLinks: Social[] = [
  {
    link: 'https://www.facebook.com/ProyectosSanMarcos',
    icon: 'facebookSquare',
  },
  {
    link: 'https://www.linkedin.com/company/proyectossm',
    icon: 'linkedin',
  },
  {
    link: 'https://www.instagram.com/proyectossm',
    icon: 'instagram',
  },
  {
    link: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    link: 'mailto:support@proyectossm.com',
    icon: 'email',
  },
];

const FooterLinks = [
  {
    title: 'Conecta con PSM',
    links: [
      { name: 'Soporte al cliente', link: '/support' },
      { name: 'Términos y condiciones', link: '/terms-and-conditions' },
      { name: '¿Quieres ser parte de PSM?', link: '/be-member' },
      { name: '¿Quieres ser nuesto aliado?', link: '/be-partner' },
      // { name: 'Prensa', link: '' },
    ],
  },
  {
    title: 'Acerca de nosotros',
    links: [
      { name: '¿Qué es PSM?', link: '/about-us#what-is-psm' },
      { name: 'Gerencias', link: '/managements' },
      { name: 'Comunidad', link: '/community' },
      { name: 'Nuestra identidad visual', link: '/about-us#identity' },
      { name: 'Nuestra misión', link: '/about-us#mission' },
    ],
  },
  {
    title: 'Extras',
    links: [
      { name: 'Ponencias', link: '/events?type=conferences' },
      { name: 'Talleres', link: '/events?type=workshops' },
      { name: 'Tienda', link: 'https://shop.proyectossm.com' },
      { name: 'Cursos', link: 'https://cursos.proyectossm.com' },
    ],
  },
];

const Footer: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <StyledFooter>
      <div className='container__footer'>
        <div className='info__footer'>
          <div className='org_info_footer'>
            <Link href='/'>
              <a>
                <Image
                  src='/psm-white.svg'
                  alt='Proyectos San Marcos'
                  width={200}
                  height={80}
                />
              </a>
            </Link>
            <span>
              Proyectos San Marcos es un equipo multidisciplinario de la
              Universidad Nacional Mayor de San Marcos que adopta, difunde y
              aplica las buenas practicas en gestión de proyectos.
            </span>
            <div>
              {SocialLinks.map(({ link, icon }, index) => (
                <Link key={index} href={link} passHref>
                  <IconButton icon={icon} fill='white' iconsize={20} />
                </Link>
              ))}
            </div>
          </div>
          {FooterLinks.map((section, index) => (
            <div key={index} className='info-section__footer'>
              <h3>{section.title}</h3>
              {section.links.map(({ link, name }, index) => (
                <Link key={index} href={link}>
                  {name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className='disclaimer__footer'>
          <span>
            Todos los derechos reservados © {new Date().getFullYear()} Proyectos
            San Marcos
          </span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
