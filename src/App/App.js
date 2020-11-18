import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.scss';

import PublicLayout from '../Layouts/Public/Layout';
import ROUTES, { RenderRoutes } from '../publicRoutes';
import LoadingSimple from '../UI/LoadingSimple/LoadingSimple';

const App = ({ title }) => {
  let layoutToDisplay = '';

  // Switching layouts in accordance to need, it can be user type, and so on
  // if user is public/unregistered we load his routes
  const user = 'public';

  layoutToDisplay = user === 'public' && (
    <PublicLayout>
      <RenderRoutes routes={ROUTES} />
    </PublicLayout>
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
