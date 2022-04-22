import React, { useState } from 'react'
import Panel from '../../Components/Panel/Panel'
import Result from '../../Result/Result'
import Car from '../../Components/Car/Car'
import './home.css'

const Home = () => {

  const [carList, setCarList] = useState([])

  return (
    <div className='home-container'>
      <div className='home'>
        {/* <Car/> */}
        <Panel setCarList={setCarList}/>
        <Result carList={carList}/>
      </div>
    </div>
  )
}

export default Home