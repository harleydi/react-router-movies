import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'



const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const { movies, setMovies } = useOutletContext()

  const handleDelete = () => {
    const removeMovie = movies.filter((movieDelete) => movieDelete.id !== movie.id )
    setMovies(removeMovie)
    navigate("/")
  }


  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <button onClick={() => navigate(`/movie/${movie.id}/details`)}>View</button>
        <button onClick={() => navigate(`/movies/${movie.id}/edit`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default MovieCard