import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* login */}
      <div className="login">
        <div className="card-body ">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label><br></br>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label><br></br>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* <button type="submit">Login</button> */}
          <Link to="/home" className="btn" type="button">Login</Link>
          </form>

          <div className='regis'>
            <button type='regis'>Create Account</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
