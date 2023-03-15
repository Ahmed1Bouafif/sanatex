import React from 'react';
import Container from './Container';
import { Nav } from './Nav';

export default function Header({ handleOpenMenu }) {
  return (
    <header className=" py-4  lg:py-6 bg-black">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
