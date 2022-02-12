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

const Display = () => {

  const[gamelistall, setGameListAll] = useState([])
  const[search, setSearch] = useState("")


  const getGamesAll = () => {
    Axios.get("http://localhost:3001/user/gamesall").then((response) => {
      console.log(response.data);
      setGameListAll(response.data); 
    })
  }
  return (
    <div className="App">
      <div className="gameInfo">
      <h1>View All Games?</h1>
      </div>
      <div className="games">
        <Button variant="contained" onClick={getGamesAll}>SHOW GAMES</Button>
        {gamelistall.map((val,key) => {
      return <div className="showgames">
      <div>
      <h3> Game: {val.gName}</h3>
      <h3> Size(GB): {val.size}</h3>
      <h3> Region: {val.region}</h3>
      <h3> Genre: {val.gametype}</h3>
      <h3> Year: {val.year}</h3>
      <h3> Publisher: {val.pubname}</h3>
      </div>
      {/* {console.log(gamelistall.gName)} */}
      
      </div>
         })}      


      </div>

    </div>
  )
}

export default Display;
