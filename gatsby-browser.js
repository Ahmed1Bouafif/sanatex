const React = require('react');
const { default: Layout } = require('./src/components/Layout');
const { StoreProvider } = require('./src/context/store');

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => (
  <StoreProvider>
    <Layout>{element}</Layout>
  </StoreProvider>
);
