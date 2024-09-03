import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    history.push('/');
  };

  return (
    <div className="dashboard">
      <h2>Customer Dashboard</h2>
      <p>Welcome to your dashboard</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
