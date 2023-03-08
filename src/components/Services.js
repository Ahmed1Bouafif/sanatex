import React from 'react';
import Container from './Container';
import { Section } from './Section';
import {
  CloudIcon,
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
    <Section className>
      <Container className="flex flex-col gap-10">
        <h2 className="text-center md:text-left font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 ">
          {services.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
