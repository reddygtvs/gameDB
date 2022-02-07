import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Display from './Display.js';
import Navbar from './Navbar';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routehome() {
  return (<div>
      <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<App />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/display" element={<Display />} />
    </Routes>

      </Router>
  </div>);
}

export default Routehome;
