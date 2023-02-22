import { Link } from 'gatsby';
import React from 'react';

export const NavLink = ({ name, pathname }) => {
  return (
    <Link
      to={pathname}
      className="inline-block rounded-lg py-2 px-3 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {name}
    </Link>
  );
};
