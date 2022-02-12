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

const Publish = ( {usernamedisplay} ) => {
  const [game, setGame] = useState("")
  const [size, setSize] = useState(0)
  const [region, setRegion] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState(0)
  
  const [publisher, setPublisher] = useState("")
  const[newgame,setNewGame] = useState(0);
  const [gameList, setGameList] = useState([])

  const addGame = () => {
    console.log(game,"\n",size,"\n", region,"\n",genre,"\n",year,"\n", usernamedisplay)
    Axios.post("http://localhost:3001/publisher/create", {
      game: game,
      size: size,
      region: region,
      genre: genre,
      year: year,
      publisher: usernamedisplay

    }).then(() => {
      console.log("Success!!")
      
    }).catch(err => console.log(err))
  }
  const getGames = () => {
    Axios.post("http://localhost:3001/publisher/games",{
      usernamedisplay: usernamedisplay,
    }).then((response) => {
      console.log(response.data);
      setGameList(response.data); 
    })
  }

  const updateGame = (gid) => {
    Axios.put('http://localhost:3001/publisher/update',{game: newgame,gid: gid}).then((response) => {
      alert("update");
      setGameList(gameList.map((val) => {
        return val.gid === gid ? {
          gName: newgame,
          size: val.size,
          region: val.region,
          gametype: val.gametype,
          year: val.year,
          publisher: val.pubname
        } : val;
      }
      
      ));
    });
  };
  return (
    <div className="App">
      
      <div className="gameInfo">
      <h1>Enter Game Input Details:</h1>
      
      <TextField id="outlined-basic" label="GAME" variant="outlined" type="text" onChange={(event) => setGame(event.target.value)}/>
      <TextField id="outlined-basic" label="SIZE(MB)" variant="outlined" type="number" onChange={(event) => setSize(event.target.value)}/>
      <TextField id="outlined-basic" label="REGION" variant="outlined" type="text" onChange={(event) => setRegion(event.target.value)}/>
      <TextField id="outlined-basic" label="GENRE" variant="outlined" type="text" onChange={(event) => setGenre(event.target.value)}/>
      <TextField id="outlined-basic" label="YEAR RELEASED" variant="outlined" type="number" onChange={(event) => setYear(event.target.value)}/>
      <Button variant="contained" onClick={addGame}>ADD GAME</Button>
      </div>
      <div className="games">
        <Button variant="contained" onClick={getGames}>SHOW GAMES</Button>
        {gameList.map((val,key) => {
      return <div className="showgames">
      <div>
      <h3> Game: {val.gName}</h3>
      <h3> Size: {val.size}</h3>
      <h3> Region: {val.region}</h3>
      <h3> Genre: {val.gametype}</h3>
      <h3> Year: {val.year}</h3>
      <h3> Publisher: {val.pubname}</h3>
      </div>
      <div><TextField id="outlined-basic" label="EDITED GAME" variant="outlined" type="text" onChange ={(event) => {setNewGame(event.target.value);}} />
      <div>
      <Button variant="contained" onClick={() => {updateGame(val.gid)}}>UPDATE</Button>
      {/* <Button variant="contained" onClick={() => {deleteGame(val.id)}}>Delete</Button> */}
      </div>
      
      </div>
      </div>
         })}      


      </div>
      

    </div>
  )
}

export default Publish;