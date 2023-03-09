import React from 'react';
import Container from './Container';
import { Section } from './Section';
import {
  ClipboardDocumentCheckIcon,
  RectangleStackIcon,
  PresentationChartLineIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  WifiIcon,
  SignalIcon,
  ServerIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { ServiceCard } from './ServiceCard';

import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      title: 'Acquisition',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Planning and design',
      icon: RectangleStackIcon,
    },
    {
      title: 'Network construction',
      icon: SignalIcon,
    },
    {
      title: 'Cable pull',
      icon: LinkIcon,
    },
    {
      title: 'Splicing  / Connection technology',
      icon: ServerIcon,
    },
    {
      title: 'Measurement technology',
      icon: PresentationChartLineIcon,
    },
    {
      title: 'In-house installations',
      icon: HomeIcon,
    },
    {
      title: 'Operation & Maintenance',
      icon: WrenchScrewdriverIcon,
    },
  ];
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
