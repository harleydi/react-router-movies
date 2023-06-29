import React from 'react'
import { useNavigate } from 'react-router-dom'



const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <button onClick={() => navigate(`/movie/${movie.id}/details`)}>View</button>
        <button onClick={() => navigate(`/movies/${movie.id}/edit`)}>Edit</button>
    </div>
  )
}

export default MovieCard