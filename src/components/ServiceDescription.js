import React from 'react';
import useServices from '../context/services-context';

export const ServiceDescription = () => {
  const { activeService, prevActiveService, services } = useServices();
  return (
    <div
      className={`bg-black text-white origin-bottom   transition-[height] duration-500   overflow-y-hidden  ${
        activeService !== null ? 'h-auto ' : 'h-0'
      }`}
    >
      <p className="text-white p-4">
        {services[activeService]?.description ||
          services[prevActiveService]?.description}
      </p>
    </div>
    // <div
    //   className={`bg-black text-white origin-bottom   transition-all duration-500  overflow-y-hidden  ${
    //     activeService !== null ? 'max-h-[700px] ' : 'max-h-0'
    //   }`}
    // >
    //   <p className="text-white p-4">
    //     {services[activeService]?.description ||
    //       services[prevActiveService]?.description}
    //   </p>
    // </div>
  );
};
