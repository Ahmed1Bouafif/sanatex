import React, { useState } from 'react';
import Container from './Container';
import { Section } from './Section';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
<<<<<<< HEAD
import { services } from '../data/services';

export const Services = () => {
=======
import { ServiceDescription } from './ServiceDescription';
import { ServiceList } from './ServiceList';
import { services } from '../data/services';
import useServices from '../context/services-context';

export const Services = () => {
  const { activeService } = useServices();
>>>>>>> e8ed85a8766523a5c9bed8c5a29d8fcfa4f8fd11
  return (
    <Section title="Services">
      <div className="flex flex-col">
        <ServiceList services={services.slice(0, services.length / 2)} />
        {activeService < services.length / 2 && <ServiceDescription />}

        <ServiceList services={services.slice(services.length / 2)} />
        {activeService >= services.length / 2 && <ServiceDescription />}
      </div>
    </Section>
  );
};
