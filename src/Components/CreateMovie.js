import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { v4 as uuid} from 'uuid'


const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [director, setDirector] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")
  const [runtime, setRuntime] = useState("")
  const [actors, setActors] = useState([])
  const [plot, setPlot] = useState("")
  const navigate = useNavigate()

  const { movies, setMovies } = useOutletContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      id: uuid(),
      title: title,
      year: year,
      director: director,
      genre: genre,
      rating: rating,
      runtime: runtime,
      actors: actors,
      plot: plot
    }
    setMovies([...movies, newMovie])
    setYear("")
    setTitle("")
    setRuntime("")
    setRating("")
    setPlot("")
    setGenre("")
    setDirector("")
    setActors("")
    navigate("/")
  }

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Movie Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="year">Movie Year:</label>
        <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
        <label htmlFor="director">Movie Director:</label>
        <input type="text" name="director" value={director} onChange={(e) => setDirector(e.target.value)} />
        <label htmlFor="genre">Movie Genre:</label>
        <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <label htmlFor="rating">Movie Rating:</label>
        <input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <label htmlFor="runtime">Runtime:</label>
        <input type="text" name="runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)} />
        <label htmlFor="actors">Actors:</label>
        <input type="text" name="actors" value={actors} onChange={(e) => setActors(e.target.value)} />
        <label htmlFor="plot">Description:</label>
        <textarea type="text" name="plot" value={plot} onChange={(e) => setPlot(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage