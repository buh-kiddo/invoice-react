import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload with email and password
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSignupMessage('Signup successful. You can now log in.');
        // Redirect to the login page after a short delay (e.g., 2 seconds)
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Handle errors, e.g., display an error message to the user
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder='user@mail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
        {signupMessage && <p className="signup-message">{signupMessage}</p>}
      </form>
    </div>
  );
}

export default Signup;
