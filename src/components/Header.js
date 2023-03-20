import React from 'react';
import Container from './Container';
import { Nav } from './Nav';

export default function Header({ handleOpenMenu }) {
  return (
    <header className="absolute w-full top-0 left-0 py-4  lg:py-3 bg-black/95 px-4 sm:px-6 lg:px-8 z-50">
      <Nav />
    </header>
  );
}
