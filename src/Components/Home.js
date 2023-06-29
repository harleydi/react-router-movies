import React, { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import MovieCard from './MovieCard'




const Home = () => {
  const { movies } = useOutletContext()
  const navigate = useNavigate()
  

 
  return (
    <div>
        <h1>Home</h1>
        <button onClick={() => navigate("/movies/create")}>Add Movie</button>
        <div>
          {movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
    </div>
  )
}

export default Home