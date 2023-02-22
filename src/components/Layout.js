import React from 'react';
import '../styles/global.css';
import { Footer } from './Footer';
import Header from './Header';
import NavMenu from './NavMenu/NavMenu';

export default function Layout({ children }) {
  return (
    <div className="relative ">
      <Header />
      <NavMenu />
      {children}
      <Footer />
    </div>
  );
}
