import React, { Component } from 'react'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Panel/Panel'
import Footer from '../Components/Footer/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <Panel show="true" cari="false"></Panel>
          <Footer></Footer>
      </div>
    )
  }
}
