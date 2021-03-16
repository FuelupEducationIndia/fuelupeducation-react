import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import LandingPage from '../pages/Landing'
import CoursePage from '../pages/Course'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: LandingPage },
  { path: '/Course', key: 'Course', exact: false, component: CoursePage },
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
      <Route Render={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf.isRequired,
}

export default ROUTES
