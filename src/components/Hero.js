import { graphql, Link, useStaticQuery } from 'gatsby';
import { capitalize, startCase } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Button2 } from './Button2';
import Container from './Container';
import { TrustedByItem } from './TrustedByItem';
const siteInfo = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

export const Hero = () => {
  const { t } = useTranslation();
  const { siteMetadata } = useStaticQuery(siteInfo).site;
  // console.log(siteMetadata);
  return (
    <div className="relative h-screen grid place-content-center">
      <Container className=" flex flex-col justfity-center  my-auto text-center  ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-black sm:text-8xl dark:text-white transition-all">
          Verbunden sein mit{' '}
          <span className="relative whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#1fbcf8]"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
          </span>{' '}
          {/* Dienstleistungen */}
        </h1>
        <Link
          to="/"
          aria-label="Go home"
          title="Company"
          className="bg-rsed-500 mx-auto   md:max-w-[200px] lg:max-w-[250px] max-w-[200px] min-w-[150px]"
        >
          {/* <div className="bg-bluse-500"> */}
          <img src="/logo01.png" alt="" />
          {/* </div> */}
        </Link>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight font-bold text-black dark:text-white/80 transition-all">
          Sanatex, die neuste Generation von schneller und intelligenter
          Technologie. Wir bringen Sie auf das höchste Level.
        </p>
        <div className="mt-10 flex flsex-col ssm:flex-row justify-center gap-2  sm:gap-6">
          <Button2 variant={'invert'} to={'/contact'} className="group">
            Kontaktieren Sie uns
            {/* {startCase(t("getInTouch"))} */}
          </Button2>
          {/* <Button2 variant={'accent'} to={'#'} className="group">
            <svg
              aria-hidden="true"
              className={`h-3 w-3 flex-none group-hover:fill-white transition-all fill-black group-active:fill-current`}
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
            </svg>
            <span className="group-hover:text-black transition ml-3">
              Watch Video
            </span>
          </Button2> */}
        </div>
      </Container>

      <div className="absolute top-0 left-0 z-[-999] w-full h-full">
        <img
          src="/hero.jpeg"
          className="absolute opacity-50 top-0 left-0  object-cover h-full w-full "
        />
        <div className="absolute top-0 left-0 h-full w-full"></div>
      </div>
    </div>
  );
};
