import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../store/product'

const Product = () => {

    const productStore = useSelector( store => store.product )
    const dispatch = useDispatch()
    
    const productButtonHandler = () => {
        dispatch( fetchProduct('https://fakestoreapi.com/products/') )
    }

    return (
        <>
            <h2>PRODUCT</h2>
            <button onClick={productButtonHandler}>HIT ME!</button>
            { productStore.isLoading === true && <div>Loading...</div>}
            { productStore.products.length > 0 &&   // Agak bug. Tanpa length muncul
                <ul>
                    { productStore.products.map( (item, index) => {
                        return (
                            <li key={index}>{item.title}</li>
                        )
                    })}
                </ul>
            }
            { productStore.isRejected === true && <div>{productStore.message}</div>}
        </>
    )
}

export default Product