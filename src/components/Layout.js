import React, { useState } from 'react';
import { StoreProvider } from '../context/store';
import '../styles/global.css';
import Header from './Header';
import NavMenu from './NavMenu/NavMenu';

export default function Layout({ children }) {
  return (
    <StoreProvider>
      <div className="relative ">
        <Header />
        <NavMenu />
        {children}
      </div>
    </StoreProvider>
  );
}
