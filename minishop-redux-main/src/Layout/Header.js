import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-700 text-white'>
        <div className='container py-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-4xl font-extrabold'><Link to="/">Minishop</Link></h2>
                </div>
                <div>
                    <ul className='flex space-x-4'>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/shopping-cart">Cart</Link></li>
                        <li><Link to="/order-history">My Order</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header