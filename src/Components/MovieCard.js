import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'



const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const { movies, setMovies } = useOutletContext()

  let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdRimD9Bs_3V9yMQqMy_yKqQfKAXmOjxxeg&usqp=CAU"

  const handleDelete = () => {
    const removeMovie = movies.filter((movieDelete) => movieDelete.id !== movie.id )
    setMovies(removeMovie)
    navigate("/")
  }


  return (
    <div className='card'>
        <img className='card-image' src={image} />
        <div className='info'>
            <div className='rating-year'>
                <p>{movie.rating}</p>
                <p>{movie.year}</p>
            </div>
            <h1 style={{ cursor: 'pointer' }} onClick={() => navigate(`/movie/${movie.id}/details`)}>{movie.title}</h1>
            <p>{movie.genre}</p>
            <div className='icons'>
                <i onClick={() => navigate(`/movies/${movie.id}/edit`)} className='icon' class="fa-solid fa-pen-to-square"></i>
                <i onClick={handleDelete} className='icon' class="fa-solid fa-trash"></i>
            </div>
        </div>
        
    </div>
  )
}

export default MovieCard