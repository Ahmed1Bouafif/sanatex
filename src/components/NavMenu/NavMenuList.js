import { Link } from 'gatsby';
import React from 'react';

export default function NavMenuList() {
  const listItems = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'About us',
      route: '/about-us',
    },
    {
      name: 'Sevices',
      route: '/services',
    },
    {
      name: 'References',
      route: '/references',
    },
    {
      name: 'Open positions',
      route: '/open-positions',
    },
    {
      name: 'Contact',
      route: '/contact',
    },
  ];
  return (
    <ul className="flex flex-col">
      {listItems.map(({ name }) => (
        <li key={name} className="w-max p-[10px] group ">
          <Link
            to="#"
            className="text-black text-[27px] font-bold group-hover:text-blue-500 transition cursor-pointer leading-8"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
