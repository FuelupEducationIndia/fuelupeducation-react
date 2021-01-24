import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

import styles from './App.module.scss';

// Landing page - for all the same

import LandingPage from '../../Landing/Landing';
import LoadingSimple from '../../UI/LoadingSimple/LoadingSimple';

// Routes and Layout for public/unauthorized user
import ROUTES, { RenderRoutes } from '../../publicRoutes';
import PublicLayout from '../../Layouts/Public/Layout';

const App = ({ title }) => {
  // Get current location. if it's homepage =>  rendering landing
  const location = useLocation();

  let layoutToDisplay = '';

  if (location.pathname === '/') {
    layoutToDisplay = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    );
  } else {
    // Switching layouts in accordance  user roles
    //

    const user = 'public';

    layoutToDisplay = user === 'public' && (
      <PublicLayout>
        <RenderRoutes routes={ROUTES} />
      </PublicLayout>
    );
  }
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
