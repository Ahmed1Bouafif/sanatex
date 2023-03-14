import React, { useState } from 'react';
import Container from './Container';
import { Section } from './Section';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
import { ServiceDescription } from './ServiceDescription';
import { ServiceList } from './ServiceList';
import { services } from '../data/services';
import useServices from '../context/services-context';

export const Services = () => {
  const { activeService } = useServices();
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
