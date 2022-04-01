import React from 'react'
import style from './home.module.css'
// import Layout from '../Layouts/Layout'

const Home = () => {
  return (
    // Route cara 1:
    // <Layout>
    //   <div>Welcome to Burger Maker</div>
    // </Layout>

    // Route cara 2: Layout diletakan pada App.js
      // <div>Welcome to Burger Maker</div>
    <div className={style.home_container}>
      <h1>Welcome to Burger Maker</h1>
    </div>
  )
}

/*

const Home = () => {
  return (
    <>
      <div>Welcome to Burger Maker</div>
      <Button className='btn'>Press</Button>
    </>
  )
}

const Button = styled.button`
  background: blue;
  border: 0;
`

*/

export default Home;