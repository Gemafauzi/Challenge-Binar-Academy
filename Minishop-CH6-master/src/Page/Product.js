import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../Component/Product/ProductCard'

const Product = () => {

    const [products,setProducts] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:4000/products/')
        .then( response => {
            if ( response.data !== null ) {
                setProducts([...response.data])
            } else {
                return Promise.reject({ errorMessage: 'There are currently no products'})
            }
        })
        .catch( error => {
            setProducts({...error})
        })
    }, [])

    return (
        <section>
            <div className='container'>
                <h2 className='text-2xl font-bold mb-8 text-center'>All Products</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {products.map( (product, index) => {
                        return (
                            <div  key={`product-${index}`}><ProductCard product={product} /></div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Product