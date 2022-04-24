import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout/Layout'
import Product from './Page/Product';
import ProductDetail from './Page/ProductDetail';
import ShoppingCart from './Page/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="login" element={<h1>Login</h1>} />

            <Route path="products/">
                <Route index element={<Product/>} />
                <Route path=':id' element={<ProductDetail />} />
            </Route>

            <Route path="catagories" element={<h1>Catagories</h1>} />
            <Route path="shopping-cart" element={<ShoppingCart/>} />
            <Route path="order-history" element={<h1>Order History</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
