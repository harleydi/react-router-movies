import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
    </div>
  )
}

export default MovieCard