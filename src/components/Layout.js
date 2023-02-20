import React from 'react';
import '../styles/global.css';
import Header from './Header';
import NavMenu from './NavMenu/NavMenu';

export default function Layout({ children }) {
  return (
    <div className="relative ">
      <Header />
      <NavMenu />
      {children}
    </div>
  );
}
