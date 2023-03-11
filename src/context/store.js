import React, { createContext, useContext, useState } from 'react';
import { ServicesProvider } from './services-context';

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
      <ServicesProvider>{children}</ServicesProvider>
    </StoreContext.Provider>
  );
};

export const useNavContext = () => {
  const { expandNav, setExpandNav } = useContext(StoreContext);
  return { expandNav, setExpandNav };
};
