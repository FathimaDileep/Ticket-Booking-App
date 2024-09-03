import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get('/api/movies');
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-item">
          <Link to={`/movie/${movie._id}`}>
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>{movie.category}</p>
            <p>{movie.languages.join(', ')}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
