import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.scss';

import Layout1 from '../Layouts/Layout1/Layout1';
import ROUTES, { RenderRoutes } from '../routes';
import LoadingSimple from '../UI/LoadingSimple/LoadingSimple';

const App = ({ title }) => {
  // Switching layouts in accordance to need, it can be user type, and so on

  const layoutToDisplay = (
    <Layout1>
      <RenderRoutes routes={ROUTES} />
    </Layout1>
  );

  return (
    <div className={styles.Container}>
      <Suspense fallback={LoadingSimple}>{layoutToDisplay}</Suspense>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
