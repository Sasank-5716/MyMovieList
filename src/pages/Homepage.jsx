import React from 'react'
import "../css/home.css"
import MovieCard from '../components/MovieCard'

function Homepage() {
  const movies = [
    {id: 1, title: "Outcast", release_date: "2022-01-01"},
    { id: 2, title: "Naruto", release_date: "2022-02-01" },
    { id: 3, title: "Onepiece", release_date: "2022-03-01" },
];

return (
  <div className='home'>
    <div className='movies-grid'>
      {movies.map((movie)=>(
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
)
}

export default Homepage