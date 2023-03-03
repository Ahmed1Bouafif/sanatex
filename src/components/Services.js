import { Link } from 'gatsby';
import React from 'react';
import Container from './Container';
import { Section } from './Section';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <Section className>
      <Container>
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Services
        </h2>

        <div className="grid grid-cols-4 ">
          <ServiceCard />
        </div>
      </Container>
    </Section>
  );
};
