import React from 'react'

const MovieDetail = (props) => {
    return (
        <div><strong>{props.label}: </strong>{props.value}</div>
    )
}

export default MovieDetail