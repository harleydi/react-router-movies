import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

const EditMovie = () => {
  const { movies, setMovies } = useOutletContext()
  const { id } = useParams()

  const [editMovie, setEditMovie] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [editYear, setEditYear] = useState("")
  const [editDirector, setEditDirector] = useState("")
  const [editGenre, setEditGenre] = useState("")
  const [editRating, setEditRating] = useState("")
  const [editRuntime, setEditRuntime] = useState("")
  const [editActors, setEditActors] = useState([])
  const [editPlot, setEditPlot] = useState("")

  const navigate = useNavigate()

  
  console.log(id)

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === id)
    setEditMovie(movie)
    console.log(editMovie)

    setEditTitle(movie.title)
    setEditYear(movie.year)
    setEditDirector(movie.director)
    setEditGenre(movie.genre)
    setEditRating(movie.rating)
    setEditRuntime(movie.runtime)
    setEditPlot(movie.plot)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies((prevState) => {
      const updatedMovie = prevState.map((movie) => {
        if (movie.id === id) {
          movie.title = editTitle
          movie.year = editYear
          movie.director = editDirector
          movie.genre = editGenre
          movie.rating = editRating
          movie.runtime = editRuntime
          movie.actors.push(editActors)
          movie.plot = editPlot
        }
        return movie
      })
      return updatedMovie
    })
    navigate("/")
  }
  
  return (
    <div>
      {movies &&
      <form onSubmit={handleSubmit}>
        <label htmlFor="editTitle">Movie Title:</label>
        <input type="text" name="editTitle" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
        <label htmlFor="editYear">Movie Year:</label>
        <input type="text" name="editYear" value={editYear} onChange={(e) => setEditYear(e.target.value)} />
        <label htmlFor="editDirector">Movie Director:</label>
        <input type="text" name="editDirector" value={editDirector} onChange={(e) => setEditDirector(e.target.value)} />
        <label htmlFor="editGenre">Movie Genre:</label>
        <input type="text" name="editGenre" value={editGenre} onChange={(e) => setEditGenre(e.target.value)} />
        <label htmlFor="editRating">Movie Rating:</label>
        <input type="text" name="editRating" value={editRating} onChange={(e) => setEditRating(e.target.value)} />
        <label htmlFor="runtime">Runtime:</label>
        <input type="text" name="editRuntime" value={editRuntime} onChange={(e) => setEditRuntime(e.target.value)} />
        <label htmlFor="actors">Actors:</label>
        <input type="text" name="editActors" value={editActors} onChange={(e) => setEditActors(e.target.value)} />
        <label htmlFor="plot">Description:</label>
        <textarea type="text" name="editPlot" value={editPlot} onChange={(e) => setEditPlot(e.target.value)} />
        <button>Submit</button>
      </form>
      }
    </div>
  )
}

export default EditMovie