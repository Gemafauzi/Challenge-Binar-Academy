import React from 'react'
import './main.css'
import Header from './Components/Header/Header'
import SearchBar from './Components/SearchBar/SearchBar'
import Result from './Components/Result/Result'

const App = () => {
  return (
    <div className='app_container'>
      <Header/>
      <SearchBar/>
      <Result/>
    </div>
  )
}

export default App