import { Link } from 'gatsby';
import React, { useState } from 'react';
import Container from './Container';
import NavMenuOpen from './NavMenu/NavMenuOpen';

export default function Header({ handleOpenMenu }) {
  return (
    <header className="text-white h-3 w-full absolute left-0 z-10 top-12">
      <Container className="flex bg-greens-500 justify-between items-center">
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          Logo
        </Link>
        <div className="flex gap-4">
          <NavMenuOpen handleOpenMenu={handleOpenMenu} />
        </div>
      </Container>
    </header>
  );
}
