import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [expandNav, setExpandNav] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        expandNav,
        setExpandNav,
        activeFormTab,
        setActiveFormTab,
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

export const useFormTabContext = () => {
  const { activeFormTab, setActiveFormTab } = useContext(StoreContext);
  return { activeFormTab, setActiveFormTab };
};
