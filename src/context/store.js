import React, { createContext, useContext, useEffect, useState } from 'react';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [expandNav, setExpandNav] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState(0);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <StoreContext.Provider
      value={{
        expandNav,
        setExpandNav,
        activeFormTab,
        setActiveFormTab,
        theme,
        setTheme,
        switchTheme,
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

export const useThemeContext = () => {
  const { theme, setTheme, switchTheme } = useContext(StoreContext);
  return { theme, setTheme, switchTheme };
};
