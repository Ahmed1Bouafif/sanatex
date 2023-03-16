import React from 'react';
import { useNavContext } from '../context/store';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const NavButton = () => {
  const { expandNav, setExpandNav } = useNavContext();
  return (
    <div className="-mr-1 mdsm:hidden ">
      <button
        onClick={(e) => setExpandNav((expandNav) => !expandNav)}
        className="relative z-10 flex h-10 w-10 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
        type="button"
        aria-expanded={expandNav}
      >
        {expandNav ? (
          <XMarkIcon className="stroke-white w-full h-full" />
        ) : (
          <Bars3Icon className="stroke-white w-full h-full" />
        )}
      </button>
    </div>
  );
};
