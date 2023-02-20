import { Link } from 'gatsby';
import React from 'react';
import { routes } from '../../routes';

export default function NavMenuList() {
  return (
    <ul className="flex flex-col">
      {routes.map(({ name, pathname }) => (
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
