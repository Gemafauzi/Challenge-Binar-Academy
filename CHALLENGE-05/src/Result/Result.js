import React from 'react'
import CarCard from './CarCard'
import { Link } from 'react-router-dom'
import './result.css'

const Result = (props) => {
  return (
    <div className='result_outer_container'>
      <div className='result_container'>
        {props.carList.length <= 0}
        {props.carList.length > 0 && props.carList.map( (car, index) => {
          return (
            <Link to={`/car/${car.id}`} style={{textDecoration:"none", color:"#FBFAF5"}}>
              <CarCard car={car} key={index}/>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Result