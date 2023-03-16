import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { Link } from 'gatsby';

import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useLocation } from '@reach/router';
import { Button2 } from './Button2';
import { Collapse } from 'react-collapse';
function groupArray(a, x) {
  let b = [];
  for (let i = 0; i < a.length; i += x) {
    let group = [];
    for (let j = i; j < i + x && j < a.length; j++) {
      group.push(a[j]);
    }
    b.push(group);
  }
  return b;
}
export const Services = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.includes('/services');
  const [activeService, setActiveService] = useState(null);
  const [prev, setPrev] = useState(activeService);

  useEffect(() => {
    console.log(activeService);
  }, [activeService]);
  return (
    <Section title="services">
      <div className="flex flex-col">
        <div className="md:hidden flex flex-col">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="maxs-h-[300px]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx / 20 }}
            >
              <ServiceCard
                {...service}
                setActiveService={setActiveService}
                activeService={activeService}
                setPrev={setPrev}
              />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex lg:hidden flex-col">
          <div className="flex justify-center">
            {services.slice(0, 2).map((service) => (
              <motion.div
                key={service.title}
                className="min-h-[250px] flex-1 "
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  activeService={activeService}
                  setPrev={setPrev}
                />
              </motion.div>
            ))}
          </div>
          <Collapse isOpened={activeService && activeService <= 2}>
            <div
              className={`bg-black text-white p-8 font-heading hidden md:block lg:hidden`}
            >
              {services[activeService - 1]?.description ||
                services[prev - 1]?.description}
            </div>
          </Collapse>
          <div className="flex justify-center">
            {services.slice(2, 4).map((service) => (
              <motion.div
                key={service.title}
                className="min-h-[250px] flex-1 "
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  activeService={activeService}
                  setPrev={setPrev}
                />
              </motion.div>
            ))}
          </div>
          <Collapse
            isOpened={activeService && activeService > 2 && activeService <= 4}
          >
            <div
              className={`bg-black text-white p-8 font-heading hidden md:block lg:hidden`}
            >
              {services[activeService - 1]?.description ||
                services[prev - 1]?.description}
            </div>
          </Collapse>
          <div className="flex justify-center">
            {services.slice(4, 6).map((service) => (
              <motion.div
                key={service.title}
                className="min-h-[250px] flex-1 "
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  activeService={activeService}
                  setPrev={setPrev}
                />
              </motion.div>
            ))}
          </div>
          <Collapse
            isOpened={activeService && activeService > 4 && activeService <= 6}
          >
            <div
              className={`bg-black text-white p-8 font-heading hidden md:block lg:hidden`}
            >
              {services[activeService - 1]?.description ||
                services[prev - 1]?.description}
            </div>
          </Collapse>
          <div className="flex justify-center">
            {services.slice(6).map((service) => (
              <motion.div
                key={service.title}
                className="min-h-[250px] flex-1 "
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  activeService={activeService}
                  setPrev={setPrev}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <Collapse isOpened={activeService && activeService > 6}>
          <div
            className={`bg-black text-white p-8 font-heading hidden md:block lg:hidden`}
          >
            {services[activeService - 1]?.description ||
              services[prev - 1]?.description}
          </div>
        </Collapse>
        <div className="hidden lg:flex lg:flex-col">
          <div className="flex justify-center">
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.title}
                className="h-[250px] flex-1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  setPrev={setPrev}
                  activeService={activeService}
                />
              </motion.div>
            ))}
          </div>
          <Collapse isOpened={activeService && activeService <= 4}>
            <div
              className={`bg-black text-white p-8 font-heading hidden lg:block`}
            >
              {services[activeService - 1]?.description ||
                services[prev - 1]?.description}
            </div>
          </Collapse>

          <div className="flex justify-center">
            {services.slice(4).map((service) => (
              <motion.div
                key={service.title}
                className="h-[250px] flex-1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: service.idx / 20 }}
              >
                <ServiceCard
                  {...service}
                  setActiveService={setActiveService}
                  activeService={activeService}
                  setPrev={setPrev}
                />
              </motion.div>
            ))}
          </div>
          <Collapse isOpened={activeService && activeService > 4}>
            <div
              className={`bg-black text-white p-8 font-heading hidden lg:block`}
            >
              {services[activeService - 1]?.description ||
                services[prev - 1]?.description}
            </div>
          </Collapse>
        </div>
      </div>
      {!isServicesPage && (
        <div className="flex justify-center">
          <Button2 to={'/services'}>READ MORE</Button2>
        </div>
      )}
    </Section>
  );
};
