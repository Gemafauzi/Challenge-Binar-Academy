import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductCard from '../Component/Product/ProductCard'

const Product = () => {

    const products = useSelector(store => store.product )
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
        .then( response => {
            dispatch({
                type: 'populateProducts',
                payload: {
                    products: [...response.data]
                }
            })
        })
    },[])

    return (
        <>
            <section>
                <div className='container'>
                    <h2 className='text-2xl font-bold'>All Products</h2>
                    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                        {products.map( (product, index) => {
                            return (
                                <div>
                                    <ProductCard key={`product=${index}`} product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product