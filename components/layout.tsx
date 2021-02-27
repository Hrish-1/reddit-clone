import Nav from './nav'

import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}

export default Layout
