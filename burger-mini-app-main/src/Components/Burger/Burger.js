import React, { useState } from 'react'
import Bun from './Bun';
import Tomato from './Tomato';
import Patty from './Patty';
import Cheese from './Cheese';
import Lettuce from './Lettuce';
import style from './burger.module.css'

const Burger = (props) => {

    // const ingredients = ['patty', 'lettuce', 'bun', 'tomato', 'cheese'];
    // const ingredients = ['patty', 'patty', 'patty', 'patty', 'patty'];
    // const ingredients = ['patty', 'cheese', 'lettuce', 'tomato', 'patty', 'bun', 'patty', 'cheese', 'lettuce', 'tomato', 'patty'];

    // Urutan burger mengikuti index dari array ingredients diatas

    return (
        <div className={style.burger}>
            <Bun type="top"/>   {/* type adalah props dan top adalah valuenya */}
            {props.ingredients.map( (item,index) => {
                switch (item) {
                    case 'patty':
                        return <Patty key={index}/>
                    case 'lettuce':
                        return <Lettuce key={index}/>
                    case 'bun':
                        return <Bun type="insert" key={index}/>
                    case 'cheese':
                        return <Cheese key={index}/>
                    case 'tomato':
                        return <Tomato key={index}/>
                    default:
                        return null;
                }
            })}
            <Bun/>
        </div>
    )
}

export default Burger;