// Dependencies
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Components
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker';
import Layout from './Layouts/Layout';

function App() {
  return (
    <>
      {/*
      <h1>INI DEFAULT LAYOUT</h1>
      // Defaut Layout tidak ikut berubah mengikuti routing
      
      <Link to="/"><p>Home</p></Link>
      <Link to="/burger-maker"><p>Burger Maker</p></Link>
      */}
      <Layout>
        <Routes>   {/* Hanya element didalam Routes yang ikut berubah mengikuti routing */}
          <Route path="/" element={<Home/>}/>
          <Route path="/burger-maker" element={<BurgerMaker/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;