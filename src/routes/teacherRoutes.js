import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/Landing'
import Teacher from '../pages/Teacher'
const ROUTES = [
  { path: '/teacher', key: 'ROOT', exact: true, component: Teacher },
  //   {
  //     path: '/page1',
  //     key: 'page1',
  //     // eslint-disable-next-line no-use-before-define
  //     component: RenderRoutes,
  //     routes: [
  //       {
  //         path: '/page1',
  //         key: 'PAGE1_ROOT',
  //         exact: true,
  //         component: hIndex(),
  //       },
  //       {
  //         path: '/page1/page1-child',
  //         key: 'PAGE1_CHILD',
  //         exact: true,
  //         component: hRing(),
  //       },
  //     ],
  //   },
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

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf.isRequired,
}

export default ROUTES
