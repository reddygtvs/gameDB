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

const Display = ( {usernamedisplay, logstate}) => {

  const[gamelistall, setGameListAll] = useState([])
  const[gamefilter, setGameFilter] = useState([])
  const [search, setNewSearch] = useState('');


  const getGamesAll = () => {
    Axios.get("http://localhost:3001/user/gamesall").then((response) => {
      console.log(response.data);
      setGameListAll(response.data); 
      setGameFilter(response.data)
    })
  }
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
  const adduserGame = (gid) => {
    if (!logstate) {
      return (
        alert("You need to log in first!")
      )
    } else if (logstate == 2) {
      return (
        alert("You are a publisher! Games can only be added as a user")
      )
    }
    Axios.post("http://localhost:3001/user/create", {
      gid: gid,
      username: usernamedisplay

    }).then(() => {
      console.log("Success!!")
      
    }).catch(err => console.log(err))
    
  }

  const filtered = !search
    ? gamelistall
    : gamelistall.filter((person) =>
        person.gName.toLowerCase().includes(search.toLowerCase())
      );
  
  return (
    <div className="App">
      <div className="gameInfo">
      <h1>View All Games?</h1>
      <input type="text" value={search} onChange={handleSearchChange} />
      </div>
      <div className="games">
        
        <Button variant="contained" onClick={getGamesAll}>SHOW GAMES</Button>
        {filtered.map((val,key) => {
      return <div className="showgames">
      <div>
      <h3> Game: {val.gName}</h3>
      <h3> Size(GB): {val.size}</h3>
      <h3> Region: {val.region}</h3>
      <h3> Genre: {val.gametype}</h3>
      <h3> Year: {val.year}</h3>
      <h3> Publisher: {val.pubname}</h3>
      </div>
      <div>
      <Button variant="contained" onClick={() => {adduserGame(val.gid)}}>GET GAME</Button>
      </div>
      
      {/* {console.log(gamelistall.gName)} */}
      
      </div>
         })}      


      </div>

    </div>
  )
}

export default Display;
