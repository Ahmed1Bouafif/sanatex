import React from 'react';
import '../styles/global.css';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
