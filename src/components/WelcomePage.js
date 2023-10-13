// WelcomePage.js

import React from 'react';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Invoice System</h1>
      <p>Please select an option:</p>
      <div>
        <a href="/signup">Sign Up</a>
        <span> | </span>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default WelcomePage;
