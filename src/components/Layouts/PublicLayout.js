import React from 'react'
import PropTypes from 'prop-types'

import ROUTES, { RenderRoutes } from '../../routes/publicRoutes'

// Public Layouts has it own integrated footer and header (it's a simple landing)
const Layout = ({ children }) => {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
