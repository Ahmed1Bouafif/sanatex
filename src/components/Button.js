import { Link } from 'gatsby';
import React from 'react';

export const Button = ({ children, className, link = '#' }) => {
  return (
    <Link
      to={link}
      className={`group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};
