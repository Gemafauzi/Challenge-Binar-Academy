import React from 'react'

import MovieCard from './MovieCard'
import style from './result.module.css'

const Result = (props) => {
    return(
        <div className={style.result_container}>
            {props.movieList.length <= 0 && <h4>No Movies at the moment</h4>}
            {props.movieList.length > 0 && props.movieList.map ((movie, index) => {
                return(
                    <MovieCard movie={movie} key={index} />
                )
            })}
        </div>
    )
}

export default Result