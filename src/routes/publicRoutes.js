/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/Landing'
import Donate from '../pages/Donate/Donate'
import Team from '../pages/Team/components/Team'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LandingPage },
  { path: '/donate', component: Donate },
  { path: '/team', component: Team },
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
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
}

export default ROUTES
