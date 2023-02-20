const React = require('react');
const { Helmet } = require('react-helmet');
const { default: Layout } = require('./src/components/Layout');
const { StoreProvider } = require('./src/context/store');
const { routes } = require('./src/routes');

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
exports.wrapPageElement = ({ path, element }) => {
  const currentRoute = routes.find(
    (route) => route.pathname === window.location.pathname
  );

  const currentRouteName = currentRoute ? currentRoute.name : 'Not Found';
  return (
    <StoreProvider>
      <Helmet>
        <title>{currentRouteName}</title>
      </Helmet>
      <Layout>{element}</Layout>
    </StoreProvider>
  );
};
