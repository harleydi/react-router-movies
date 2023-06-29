import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from './MovieCard'
const Home = () => {
  const { movies } = useOutletContext()
  

 
  return (
    <div>
        <h1>Home</h1>
        <div>
          {movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
    </div>
  )
}

export default Home