import { Link } from 'gatsby';
import React from 'react';

export const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="Go home"
      title="Company"
      className="inline-flex items-center"
    >
      <svg
        className="w-8 text-deep-purple-accent-400 stroke-blue-600"
        viewBox="0 0 24 24"
        strokeLinejoin="round"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        fill="none"
      >
        <rect x="3" y="1" width="7" height="12"></rect>
        <rect x="3" y="17" width="7" height="6"></rect>
        <rect x="14" y="1" width="7" height="6"></rect>
        <rect x="14" y="11" width="7" height="12"></rect>
      </svg>
      <span className="ml-2 text-xl font-bold tracking-wide text-black uppesrcase font-title">
        Sanatex
      </span>
    </Link>
  );
};
