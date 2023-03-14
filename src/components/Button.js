import { Link } from 'gatsby';
import React from 'react';

export const Button = ({ children, link = '#', variant = 'primary' }) => {
  const primaryStyles =
    ' font-semibold  focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600';
  const secondaryStyles =
    ' font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer leading-normal bg-black text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900';
  const tertiaryStyles =
    ' ring-1  ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 ';
  let styles = '';
  switch (variant) {
    case 'secondary':
      styles = secondaryStyles;
      break;
    case 'tertiary':
      styles = tertiaryStyles;
      break;
    default:
      styles = primaryStyles;
  }
  return (
    <Link
      to={link}
      className={`group inline-flex  items-center justify-center rounded-none py-3 px-8 text-sm focus:outline-none leading-normal cursor-pointer ${styles}`}
    >
      {children}
    </Link>
  );
};
