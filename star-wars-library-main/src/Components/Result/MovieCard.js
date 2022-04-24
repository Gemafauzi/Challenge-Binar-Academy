import React from 'react'
import MovieDetail from './MovieDetail'

import style from './result.module.css'

const MovieCard = (props) => {
    return(
            <div className={style.movie_card}>
                    <MovieDetail label="Episode" value={props.movie.episode_id} />
                    <MovieDetail label="Title" value={props.movie.title} />
                    <MovieDetail label="Release Date" value={props.movie.relase_date} />
                    <MovieDetail label="Director" value={props.movie.director} />
                    <MovieDetail label="Producer" value={props.movie.producer} />
            </div>
    )
}

export default MovieCard