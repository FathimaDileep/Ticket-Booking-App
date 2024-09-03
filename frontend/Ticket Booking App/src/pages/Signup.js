import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signupHandler = async () => {
    const response = await axios.post('/api/users/register', { name, email, password });
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      history.push('/dashboard');
    } else {
      alert('Error in signup');
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={signupHandler}>Sign Up</button>
    </div>
  );
};

export default Signup;
