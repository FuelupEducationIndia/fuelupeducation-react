/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './MainPage/MainPage';

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: MainPage },
  {
    path: '/page1',
    key: 'page1',
    component: RenderRoutes,
    routes: [
      {
        path: '/page1',
        key: 'PAGE1_ROOT',
        exact: true,
        component: () => <h1>page1 Index</h1>,
      },
      {
        path: '/page1/page1-child',
        key: 'PAGE1_CHILD',
        exact: true,
        component: () => <h1>page1 Rings</h1>,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }
  
  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }

export default ROUTES;
