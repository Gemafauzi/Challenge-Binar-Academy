import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import burgerSlice from '../../store/burger'

const IngredientList = () => {

    const ingredient = useSelector( store => store.burger.ingredient )
    const totalPrice = useSelector( store => store.burger.totalPrice )
    const dispatch = useDispatch()

  return (
    <div>
        <ul>
            <li>
                Patty: {ingredient.patty} 
                <button onClick={ () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'patty'}) ) }>-</button>
                <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'patty'}) ) }>+</button>
            </li>
            <li>
                Lettuce: {ingredient.lettuce} 
                <button onClick={ () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'lettuce'}) ) }>-</button>
                <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'lettuce'}) ) }>+</button>
            </li>
            <li>
                Cheese: {ingredient.cheese} 
                <button onClick={ () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'cheese'}) ) }>-</button>
                <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'cheese'}) ) }>+</button>
            </li>
            <li>
                Tomato: {ingredient.tomato} 
                <button onClick={ () => dispatch( burgerSlice.actions.removeIngredient({ ingredient: 'tomato'}) ) }>-</button>
                <button onClick={ () => dispatch( burgerSlice.actions.addIngredient({ ingredient: 'tomato'}) ) }>+</button>
            </li>
        </ul>
        <h5>Total Price: Rp {totalPrice}</h5>
    </div>
  )
}

export default IngredientList