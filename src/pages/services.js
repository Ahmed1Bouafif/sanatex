import React from 'react';
import Layout from '../components/Layout';
import { Services } from '../components/Services';
import { SEO } from '../components/seo';

const ServicesPage = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
export const Head = () => <SEO />;
