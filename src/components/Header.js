import React, { useState } from 'react';
import Container from './Container';
import { Nav } from './Nav';

export default function Header({ handleOpenMenu }) {
  return (
    <header className="py-10">
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
