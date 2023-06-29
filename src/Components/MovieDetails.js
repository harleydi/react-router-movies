import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState("")
  const { movies } = useOutletContext()
  const { id } = useParams()

  useEffect(() => {
    // const getData = () => {
      const movie = movies.filter((movie) => movie.id === id)
      setCurrentMovie(movie[0])
      console.log(currentMovie)
      
    // }
    // getData()

  }, [id, movies])

  
  
  return (
    <div>
      <p>Movie Details</p>
      <h1>{currentMovie.title}</h1>
      <div>
        <span>{currentMovie.genre} | </span>
        <span>{currentMovie.year} | </span>
        <span>{currentMovie.rating} | </span>
        <span>{currentMovie.runtime}mins</span>
      </div>
      <h6>Director: {currentMovie.director}</h6>
      <p>{currentMovie.plot}</p>
      <ul>
        {currentMovie.actors}
      </ul>
      
    </div>
  )
}

export default MovieDetails