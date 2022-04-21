import React from 'react'
import IngredientController from './IngredientController'
import IngredientList from './IngredientList'

const Burger = () => {
  return (
    <>
        <h2>Burger</h2>
        <IngredientList/>
        <IngredientController/>
    </>
  )
}

export default Burger