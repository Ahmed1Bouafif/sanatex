import React from 'react';
import { useNavContext } from '../context/store';

export const NavButton = () => {
  const { expandNav, setExpandNav } = useNavContext();
  return (
    <div className="-mr-1 md:hidden ">
      <button
        onClick={(e) => setExpandNav((expandNav) => !expandNav)}
        className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
        type="button"
        aria-expanded={expandNav}
      >
        {expandNav ? (
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-white"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path
              d="M0 1H14M0 7H14M0 13H14"
              className="origin-center transition scale-90 opacity-0"
            ></path>
            <path
              d="M2 2L12 12M12 2L2 12"
              className="origin-center transition"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-white"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path
              d="M0 1H14M0 7H14M0 13H14"
              className="origin-center transition"
            ></path>
            <path
              d="M2 2L12 12M12 2L2 12"
              className="origin-center transition scale-90 opacity-0"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};
