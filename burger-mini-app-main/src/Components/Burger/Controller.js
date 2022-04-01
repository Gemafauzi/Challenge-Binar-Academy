import React from 'react'

import AddButton from './AddButton'
import MapItem from './MapItem'
import style from './controller.module.css'

const Controller = (props) => {
  return (
    <>
        <div className={style.ingredients_selector}>
            <h5>Add Ingredients</h5>
            <div>
                <AddButton label="Patty" clickHandler={() => props.addIngredientsHandler('patty')} />
                <AddButton label="Lettuce" clickHandler={() => props.addIngredientsHandler('lettuce')} />
                <AddButton label="Tomato" clickHandler={() => props.addIngredientsHandler('tomato')} />
                <AddButton label="Cheese" clickHandler={() => props.addIngredientsHandler('cheese')} />
                <AddButton label="Bun" clickHandler={() => props.addIngredientsHandler('bun')} />
            </div>
        </div>
        <div className={style.ingredients_map}>
            {/* Loop untuk membuat list ingredient sesuai dengan urutan array */}
            {props.ingredients.map( (item, index) => {
                return (
                    <>
                        {/* Merender MapItem untuk setiap item dari 'ingredients' */}
                        <MapItem
                            label={item}
                            key={index}
                            removeHandler={() => props.removeIngredientsHandler(index)}
                            upHandler={() => props.moveUpIngredientsHandler(index)}
                            downHandler={() => props.moveDownIngredientsHandler(index)}
                            firstItem={ index === 0 }
                            lastItem={ index === props.ingredients.length -1 }
                        />
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Controller