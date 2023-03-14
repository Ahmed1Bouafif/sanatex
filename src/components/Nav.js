import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { useNavContext } from '../context/store';
import { navLinks } from '../data/nav-links';
import { Button } from './Button';
import { NavButton } from './NavButton';
import { NavLink } from './NavLink';
import { NavListMobile } from './NavListMobile';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import i18next from 'i18next';
import { LangSelect } from './LangSelect';
import { Logo } from './Logo';

const menuQuery = graphql`
  query MenuQuery {
    site {
      siteMetadata {
        menu {
          label
          slug
        }
      }
    }
  }
`;

export const Nav = () => {
  const { menu } = useStaticQuery(menuQuery).site.siteMetadata;

  const { expandNav, setExpandNav } = useNavContext();

  return (
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Logo />
        <div className="hidden md:flex md:gap-x-4">
          {menu.map(({ label, slug }) => (
            <NavLink key={label} label={label} slug={slug} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <div className="relative inline-block w-12">
          <LangSelect />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fillRule="evenodd"
                d="M17.293 6.707a1 1 0 00-1.414 0L10 12.586 4.707 7.293a1 1 0 00-1.414 1.414l5.656 5.657a1 1 0 001.414 0l5.656-5.657a1 1 0 000-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <Button to="#">Get in touch</Button>
        <NavButton />
        {expandNav ? (
          <>
            <div className="fixed inset-0 bg-slate-300/50 opacity-100 md:hidden"></div>
            <NavListMobile />
          </>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};
