import React, { useState } from 'react';
import axios from 'axios';
import ActorGenreForm from './ActorGenreForm/ActorGenreForm';

const API_KEY = '9ff5b3b383efd0e12489cadd77f3b90b';

function ActorMovieList() {
  const [actorName, setActorName] = useState('tom hanks');
  const [genre, setGenre] = useState('drama');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
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
    console.log(movies)
  };



  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">Actor Movies List</h1>
      <button onClick={fetchMovies} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">MOVIES</button>    </div>
  );
}

export default ActorMovieList;