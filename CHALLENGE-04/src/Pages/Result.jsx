import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Panel/Panel'
import Footer from '../Components/Footer/Footer'
import SpaceHero from '../Components/SpacerHero/SpaceHero'
import Cars from '../Components/Card/Cars'


export default class Home extends Component {

    state = {
        data: []
    }

    async getData() {
        let data = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
        let datas = await data.json();
        this.setState({data: datas})
    }


    componentDidMount() {
        this.getData();

        setTimeout(()=>{
            console.log(this.state.data)
        },3000)
    }

  render() {
    return (
      <div>
          <Navbar></Navbar>
          <SpaceHero></SpaceHero>
          <Panel show="true" edit="true"></Panel>

          <div className="row">
            <div className="container d-flex flex-wrap justify-content-between w-80">
            { this.state.data.map((e,key)=>{ 
                return <Cars key={key} {...e}/>
                }) }
                
            </div>

          </div>
          <Footer></Footer>
      </div>
    )
  }
}
