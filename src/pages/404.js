import React from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="text-9xl text-center">404</div>
    </Layout>
  );
};

export default NotFoundPage;
export const Head = () => <SEO />;
