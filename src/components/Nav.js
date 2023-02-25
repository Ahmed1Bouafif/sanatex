import { Link } from 'gatsby';
import React from 'react';
import { useNavContext } from '../context/store';
import { navLinks } from '../data/nav-links';
import { Button } from './Button';
import { NavButton } from './NavButton';
import { NavLink } from './NavLink';
import { NavListMobile } from './NavListMobile';

export const Nav = () => {
  const { expandNav, setExpandNav } = useNavContext();
  return (
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Link className="font-bold hs-10" to="/">
          Sanate<span className="font-bold text-blue-500">X</span>
        </Link>
        <div className="hidden md:flex md:gap-x-4">
          {navLinks.map(
            ({ name, pathname }) =>
              name !== 'Home' && (
                <NavLink key={name} name={name} pathname={pathname} />
              )
          )}
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
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
