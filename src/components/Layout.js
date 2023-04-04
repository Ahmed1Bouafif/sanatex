import React from 'react';
import '../styles/global.css';
import Header from './Header';
import { Footer } from './Footer';
import Contact from './Contact';
import { TrustedBy } from './TrustedBy';
import MapContainer from './MapContainer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="relative mb-[400px]">
        <MapContainer />
      </div>
      <Footer />
    </>
  );
}
