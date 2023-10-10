import React, { useState } from 'react';
import axios from 'axios';
import ActorGenreForm from './ActorGenreForm/ActorGenreForm';

const API_KEY = '9ff5b3b383efd0e12489cadd77f3b90b';

function ActorMovieList() {
  const [actorName, setActorName] = useState('');
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actorName}`);
      const actorId = response.data.results[0]?.id;

      if (actorId) {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_cast=${actorId}&with_genres=${genre}`);
        setMovies(movieResponse.data.results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">Actor Movies List</h1>
      <ActorGenreForm handleSubmit={handleSubmit} setActorName={setActorName}  setGenre={setGenre}  genre={genre} actorName={actorName}/>
      {loading && <p className="text-gray-600">Loading...</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
            <p className="text-gray-700">{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorMovieList;