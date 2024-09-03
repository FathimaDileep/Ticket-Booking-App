import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const loginHandler = async () => {
    const response = await axios.post('/api/users/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      history.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
