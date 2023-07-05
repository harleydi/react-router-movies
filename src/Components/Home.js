import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate, useOutletContext } from 'react-router-dom'
import MovieCard from './MovieCard'




const Home = () => {
  const { movies } = useOutletContext()
  const navigate = useNavigate()


 
  return (
    <div className='home'>
        <h1 className='home-h1'>Movies</h1>
        <button onClick={() => navigate("/movies/create")}>Add Movie</button>
        <div className='movie-container'>
          {movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
    </div>
  )
}

export default Home