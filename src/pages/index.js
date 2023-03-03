import * as React from 'react';
import Container from '../components/Container';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { Section } from '../components/Section';
import { Services } from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Section bg>
        <Container>
          <h2 className="font-display text-3xl text-white tracking-tight sm:text-4xl md:text-5xl">
            Section title
          </h2>
        </Container>
      </Section>
      <Services />
    </>
  );
}
