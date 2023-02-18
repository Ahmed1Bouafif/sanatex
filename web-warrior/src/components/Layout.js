import React, { useState } from 'react';
import '../styles/global.css';
import Header from './Header';
import NavMenu from './NavMenu';

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (e) => setOpenMenu(true);

  const handleCloseMenu = (e) => setOpenMenu(false);

  return (
    <div className="relative ">
      <Header handleOpenMenu={handleOpenMenu} />
      <NavMenu openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
      {children}
    </div>
  );
}
