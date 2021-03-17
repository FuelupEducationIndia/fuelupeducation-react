import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/Landing'
<<<<<<< HEAD
import CoursePage from '../pages/Course'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LandingPage },
  { path: '/Course', key: 'Course', exact: false, component: CoursePage },
=======

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LandingPage },
  {
    path: '/page1',
    key: 'page1',
    // eslint-disable-next-line no-use-before-define
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
>>>>>>> 5d7d154e6b058f4087f985c2f182d89b3a656618
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
<<<<<<< HEAD
      <Route Render={() => <h1>Not Found!</h1>} />
=======
      <Route component={() => <h1>Not Found!</h1>} />
>>>>>>> 5d7d154e6b058f4087f985c2f182d89b3a656618
    </Switch>
  )
}

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf.isRequired,
}

export default ROUTES
