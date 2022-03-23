
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import * as React from 'react';
import Button from '@mui/material/Button';
import './BasicButtons.js';
import './BasicTextFields.js';
import TextField from '@mui/material/TextField';
import './IconButtons.js';



const App = ( {logstate, setLogstate, usernamedisplay} ) => {

  
  return (
    
    
    <div className="App">
      
      <div className="gameInfo">
      <h1>Welcome to GameDatabase,</h1>
      <h1>{usernamedisplay}</h1>
        <h2>Features available:</h2>
        <h2>Publish Games</h2>
        <h2>Add/Modify/Remove games from your list</h2>
        <h2>Search and Filter Database for choices</h2>


      </div>
      

    </div>
  );
}



export default App;
