import React from 'react'
import IngredientController from './IngredientController'
import InggredientList from './IngredientList'


const Burger = () => {
    return(
        <>
            <h2>Burger</h2>
            <InggredientList />
            <IngredientController />
        </>
    )
}

export default Burger