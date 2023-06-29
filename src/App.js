import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [movies, setMovies] = useState([
    {
        "id": uuid(),
        "title": "The Avengers",
        "year": 2012,
        "director": "Joss Whedon",
        "genre": "Action",
        "rating": 8.0,
        "runtime": 143,
        "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
        "plot": "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
        "id": uuid(),
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "genre": "Action, Crime, Drama",
        "rating": 9.0,
        "runtime": 152,
        "actors": ["Christian Bale", "Heath Ledger", "Michael Caine", "Gary Oldman", "Morgan Freeman"],
        "plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        "id": uuid(),
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "genre": "Action, Adventure, Sci-Fi",
        "rating": 8.8,
        "runtime": 148,
        "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe"],
        "plot": "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
        "id": uuid(),
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genre": "Crime, Drama",
        "rating": 8.9,
        "runtime": 154,
         "actors": ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Ving Rhames"],
        "plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        "id": uuid(),
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": "Drama",
        "rating": 9.3,
        "runtime": 142,
         "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    }
])

  console.log(movies)
  return (
    <div className="App">
      <Outlet context={{ movies, setMovies }} />
    </div>
  );
}

export default App;
