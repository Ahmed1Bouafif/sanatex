import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { ServiceDescription } from './ServiceDescription';
import useServices from '../context/services-context';
export const ServiceList = ({ services }) => {
  const { activeService, setActiveService, handleClose, handleOpen } =
    useServices();
  return (
    <div className="flex items-stretch flex-1">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index / 20 }}
        >
          <ServiceCard
            {...service}
            activeService={activeService}
            index={service.id}
            handleOpen={handleOpen}
            setActiveService={setActiveService}
            handleClose={handleClose}
          />
        </motion.div>
      ))}
    </div>
  );
};
