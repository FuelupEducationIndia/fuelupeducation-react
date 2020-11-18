import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar isAuth="true" />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
