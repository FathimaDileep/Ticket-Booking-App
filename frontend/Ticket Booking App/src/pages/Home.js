import React from 'react';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Theatre Booking System</h1>
      <MovieList />
    </div>
  );
};

export default Home;
