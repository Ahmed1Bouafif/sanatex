import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (e) => setOpenMenu(true);
  const handleCloseMenu = (e) => setOpenMenu(false);

  return (
    <StoreContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        handleOpenMenu,
        handleCloseMenu,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useMenuContext = () => {
  const { openMenu, setOpenMenu, handleCloseMenu, handleOpenMenu } =
    useContext(StoreContext);
  return { openMenu, setOpenMenu, handleCloseMenu, handleOpenMenu };
};
