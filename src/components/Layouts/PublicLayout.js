import React from 'react'

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
