import { Link } from 'gatsby';
import React from 'react';

export const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="Go home"
      title="Company"
      className="bg-rsed-500 md:max-w-[200px] lg:max-w-[250px] max-w-[200px] min-w-[150px]"
    >
      <div className="bg-bluse-500">
        <img src="/logo.png" alt="" className="bg-grseen-500" />
      </div>
    </Link>
  );
};
