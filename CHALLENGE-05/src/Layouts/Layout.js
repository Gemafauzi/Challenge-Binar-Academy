import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Car from '../Components/Car/Car'
import MainContent from './MainContent'

const Layout = (props) => {
  return (
    <>
      <Navbar/>
      {/* <Car/> */}
      <MainContent>
        {props.children}
      </MainContent>
      <Footer/>
    </>
  )
}

export default Layout