import React from 'react';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <SEO />;
