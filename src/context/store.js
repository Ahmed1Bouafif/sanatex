import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        expandNav,
        setExpandNav,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useNavContext = () => {
  const { expandNav, setExpandNav } = useContext(StoreContext);
  return { expandNav, setExpandNav };
};
