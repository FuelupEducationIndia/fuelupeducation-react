import React from 'react';
import PropTypes from 'prop-types';

const Layout1 = ({ children }) => {
  return (
    <div>
      You can add here header and navigation
      <br />
      {children}
      <br />
      and you can add a footer for this layout or use from another tab
    </div>
  );
};

Layout1.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout1;
