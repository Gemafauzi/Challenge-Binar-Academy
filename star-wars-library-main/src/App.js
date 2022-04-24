import React, { useState } from 'react'

import './main.css'

import Header from './Components/Header/Header';
import SeacrhBar from './Components/SearchBar/SearchBar';
import Result from './Components/Result/Result';

function App() {

  const [movieList, setMovieList] = useState([])

  return (
    <>
      <div className='app_container'>
        <Header/>
        <SeacrhBar setMovieList={setMovieList}/>
        <Result movieList={movieList} />
      </div>
    </>
  );
}

export default App;
