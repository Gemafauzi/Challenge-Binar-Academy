import React from "react";
import { useDispatch } from "react-redux";
import burgerSlice from "../../store/burger";

const IngredientController = () => {

    const dispacth = useDispatch()

    return (
        <div>
            <button onClick={ () => dispacth( burgerSlice.actions.addIngredient({ ingredient: 'patty' }) ) }>Add Patty</button>
            <button onClick={ () => dispacth( burgerSlice.actions.addIngredient({ ingredient: 'lettuce' }) ) }>Add Patty</button>
            <button onClick={ () => dispacth( burgerSlice.actions.addIngredient({ ingredient: 'cheese' }) ) }>Add cheese</button>
            <button onClick={ () => dispacth( burgerSlice.actions.addIngredient({ ingredient: 'tomato' }) ) }>Add tomato</button>
        </div>
    )
}

export default IngredientController