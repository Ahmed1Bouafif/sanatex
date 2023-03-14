import React, { useState } from 'react';
import Container from './Container';
import { Section } from './Section';
import { Link } from 'gatsby';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Button } from './Button';
import { useLocation } from '@reach/router';

export const Services = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.includes('/services');
  return (
    <Section title="Services">
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
          <Link
            className=" px-5 py-3 border-[1px] border-black bg-white self-center hover:text-white hover:bg-black transition-all duration-300"
            to="/services"
          >
            REAM MORE
          </Link>
        )}
      </div>
    </Section>
  );
};
