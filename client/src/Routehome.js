import React, { useState } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Display from './Display.js';
import Navbar from './Navbar';
import App from './App';
import Logout from './Logout.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routehome() {
  const [logstate, setLogstate] = useState(0)
  if (logstate == 1) {
  return (<div>
      <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<App logstate={logstate} setLogstate={setLogstate}/>} />
      <Route exact path="/login" element={<Logout />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/display" element={<Display />} />
    </Routes>

      </Router>
  </div>);
  } else if (logstate == 2) {
    return (<div>
      <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<App logstate={logstate} setLogstate={setLogstate}/>} />
      <Route exact path="/login" element={<Logout />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/display" element={<Display />} />
    </Routes>

      </Router>
  </div>);
  } else {
    return (<div>
      <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<App logstate={logstate} setLogstate={setLogstate}/>} />
      <Route exact path="/login" element={<Login logstate={logstate} setLogstate={setLogstate}/>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/display" element={<Display />} />
    </Routes>

      </Router>
  </div>);
  }
}

export default Routehome;
