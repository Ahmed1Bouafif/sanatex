import React from 'react';
import { AboutUs } from '../components/AboutUs';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>
      <AboutUs />
    </Layout>
  );
};

export default AboutPage;
export const Head = () => <SEO />;
