/* eslint-disable no-use-before-define */

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/Landing'
import SignIn from '../pages/sign-in/SignIn'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LandingPage },
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
]
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}

export default ROUTES
