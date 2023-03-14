const React = require('react');
const { Helmet } = require('react-helmet');
const { default: Layout } = require('./src/components/Layout');
const { StoreProvider } = require('./src/context/store');

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
exports.wrapPageElement = ({ path, element }) => {
  return <StoreProvider>{element}</StoreProvider>;
};
