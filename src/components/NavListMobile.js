import { Link } from 'gatsby';
import React from 'react';
import { navLinks } from '../data/nav-links';

export const NavListMobile = () => {
  return (
    <div className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100 md:hidden">
      {navLinks.map(({ name, pathname }) => (
        <Link key={name} to={pathname} className="block w-full p-2">
          {name}
        </Link>
      ))}
    </div>
  );
};
