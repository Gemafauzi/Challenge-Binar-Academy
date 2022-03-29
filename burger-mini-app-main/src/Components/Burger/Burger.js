import React from 'react'
import Bun from './Bun';
import Tomato from './Tomato';
import Patty from './Patty';
import Cheese from './Cheese';
import Lettuce from './Lettuce';

const Burger = () => {
    return (
        <>
            <Bun/>
            <Tomato/>
            <Cheese/>
            <Patty/>
            <Lettuce/>
            <Bun/>
        </>
        // <h1>
        //     Ini adalah komponen Burger
        // </h1>
    )
}

export default Burger;