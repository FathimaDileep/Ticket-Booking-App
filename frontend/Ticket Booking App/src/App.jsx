import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MovieDetail from './components/MovieDetail';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/movie/:id" component={MovieDetail} />
      </main>
    </Router>
  );
};

export default App;
