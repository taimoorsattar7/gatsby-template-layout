import React from "react"

const Layout = ({ location, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <header>Header</header>

      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
