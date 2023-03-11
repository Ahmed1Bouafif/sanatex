import React from 'react';
import Container from './Container';
import { Section } from './Section';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
import { services } from '../data/services';

export const Services = () => {
  return (
    <Section title="Services">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 ">
        {services.map((service, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx / 20 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
