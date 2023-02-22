import { Link } from 'gatsby';
import React from 'react';
import { navLinks } from '../data/nav-links';
import { NavLink } from './NavLink';

export const Nav = () => {
  return (
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Link className="font-bold hs-10" to="/">
          Sanate<span className="font-bold text-blue-500">X</span>
        </Link>
        <div className="hidden md:flex md:gap-x-6">
          {navLinks.map(
            ({ name, pathname }) =>
              name !== 'Home' && (
                <NavLink key={name} name={name} pathname={pathname} />
              )
          )}
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <Link className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 cursor-pointer leading-normal">
          Get in touch
        </Link>
      </div>
    </nav>
  );
};
