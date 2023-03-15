import { Link } from 'gatsby';
import React from 'react';

export const Button2 = ({
  children,
  to,
  variant = 'primary',
  className,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} className={`relative ${className}`}>
      <Link
        className={`w-[200px] block py-3 px-6  leading-10 text-base no-underline   tracking-[2px] text-center relative transition-all duration-[0.35s] border-2 border-solid   after:absolute after:content-[''] after:w-0 after:h-full after:transition-all after:duration-[0.35s] after:left-0 after:top-0 group hover:after:w-full  ${
          variant === 'primary'
            ? 'text-black border-black after:bg-black'
            : variant === 'secondary'
            ? 'text-white border-white after:bg-white'
            : variant === 'accent'
            ? 'text-black hover:border-blue-600 after:bg-blue-600'
            : variant === 'invert'
            ? 'text-white bg-black border-black after:bg-white'
            : ''
        } w-full`}
        to={to}
      >
        <span
          className={`relative z-[2] font-xs  transition flex items-center justify-center ${
            variant === 'primary'
              ? 'group-hover:text-white text-black'
              : variant === 'secondary'
              ? 'group-hover:text-black text-white'
              : variant === 'invert'
              ? 'group-hover:text-black text-white'
              : ''
          }`}
        >
          {children}
        </span>
      </Link>
    </button>
  );
};