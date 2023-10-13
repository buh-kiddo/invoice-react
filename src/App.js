// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {


  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;
