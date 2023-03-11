import React, { createContext, useContext, useState } from 'react';
import { services } from '../data/services';

const ServicesContext = createContext([]);

export const ServicesProvider = ({ children }) => {
  const [activeService, setActiveService] = useState(null);
  const [prevActiveService, setPrevActiveService] = useState(null);

  const handleOpen = (index) => {
    setActiveService(index);
    setPrevActiveService(index);
  };
  const handleClose = () => {
    setPrevActiveService(activeService);
    setActiveService(null);
  };
  return (
    <ServicesContext.Provider
      value={{
        services,
        activeService,
        setActiveService,
        prevActiveService,
        setPrevActiveService,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

const useServices = () => useContext(ServicesContext);

export default useServices;
