import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      Navigation goes here
      {children}
      Here goes footer
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
