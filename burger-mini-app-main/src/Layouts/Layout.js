import React from 'react'
import Navigation from './Navigation'
import MainContent from './MainContent'

const Layout = (props) => {
  return (
    <>
      <Navigation/>
      <MainContent>
        {props.children}
      </MainContent>
    </>
  )
}

export default Layout