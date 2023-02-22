import { Link } from 'gatsby';
import React from 'react';
import { navLinks } from '../../data/nav-links';

export default function NavMenuList() {
  return (
    <ul className="flex flex-col">
      {navLinks.map(({ name, pathname }) => (
        <li key={name} className="w-max p-[10px] group ">
          <Link
            to={pathname}
            className="text-black text-[27px] font-bold group-hover:text-blue-500 transition cursor-pointer leading-8"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
