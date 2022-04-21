import React from 'react'
import { useDispatch } from 'react-redux'
import burgerSlice from '../../store/burger'

const IngredientController = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'patty'}) ) }>Add Patty</button>
        <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'lettuce'}) ) }>Add Lettuce</button>
        <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'cheese'}) ) }>Add Cheese</button>
        <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'tomato'}) ) }>Add Tomato</button>
    </div>
  )
}

export default IngredientController