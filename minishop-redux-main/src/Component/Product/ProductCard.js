import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className='border border-solid border-slate-400 p-4 rounded-md text-center'>
        <img src={props.product.image} className='aspect-square w-full object-cover mb-4' alt=""/>
        <h5 className='text-2xl font-bold mb-8'>{props.product.title}</h5>
        <div className='text-xl font-bold text-red-500'>$ {props.product.price}</div>
        <Link to={`/products/${props.product.id}`} className='px-6 py-3 bg-green-500 border-0 text-white mt-8 block'>Go to Product</Link> 
    </div>
  )
}

export default ProductCard