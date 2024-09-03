import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(`/api/movies/${id}`);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="movie-detail">
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <h4>Cast: {movie.cast}</h4>
      <h4>Category: {movie.category}</h4>
      <h4>Languages: {movie.languages?.join(', ')}</h4>
      <button>Book Ticket</button>
    </div>
  );
};

export default MovieDetail;
