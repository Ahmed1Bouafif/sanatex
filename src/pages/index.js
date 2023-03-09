import * as React from 'react';
import { AboutUs } from '../components/AboutUs';
import Container from '../components/Container';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { Section } from '../components/Section';
import { Services } from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
    </>
  );
}
