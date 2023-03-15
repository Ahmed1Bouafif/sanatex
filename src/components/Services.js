import React from 'react';
import { Section } from './Section';
import { Link } from 'gatsby';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useLocation } from '@reach/router';
import { Button2 } from './Button2';

export const Services = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.includes('/services');
  return (
    <Section title="services">
      <div className="flex flex-col gap-8">
        <div className="grid sm:grsid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="lg:h-[270px]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx / 20 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        {!isServicesPage && (
          <div className="flex justify-center">
            <Button2 to={'/services'}>READ MORE</Button2>
          </div>
        )}
      </div>
    </Section>
  );
};
