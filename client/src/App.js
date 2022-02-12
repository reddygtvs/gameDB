
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

  const [game, setGame] = useState("")
  const [size, setSize] = useState(0)
  const [publisher, setPublisher] = useState("")
  const [region, setRegion] = useState("")
  const [year, setYear] = useState(0)
  
  const[newgame,setNewGame] = useState(0);
  const [gameList, setGameList] = useState([])

  const addGame = () => {
    console.log(game,"\n",size,"\n",publisher,"\n",region,"\n",year,"\n")
    Axios.post("http://localhost:3001/create", {
      game: game,
      size: size,
      publisher: publisher,
      region: region,
      year: year,

    }).then(() => {
      console.log("Success!!")
      
    }).catch(err => console.log(err))
  }

  const getGames = () => {
    Axios.get("http://localhost:3001/games").then((response) => {
      setGameList(response.data); 
    })
  }

  const updateGame = (id) => {
    Axios.put('http://localhost:3001/update',{game: newgame,id: id}).then((response) => {
      alert("update");
      setGameList(gameList.map((val) => {
        return val.id === id ? {
          game: newgame,
          size: val.size,
          publisher: val.publisher,
          region: val.region,
          year: val.year,
        } : val;
      }
      
      ));
    });
  };
  const deleteGame = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setGameList(gameList.filter((val) => {
        return val.id != id;
      })
      );
    });
  };





  const displayInfo = () => 
    console.log(game,"\n",size,"\n",publisher,"\n",region,"\n",year,"\n")
  return (
    
    
    <div className="App">
      
      {/* <div>
      <TextField id="outlined-basic" label="GAME" variant="outlined" type="number" onChange={(event) => props.setLogstate(event.target.value)}/>
      </div> */}
      
      
      <div className="gameInfo">
      <h1>Welcome to GameDatabase,</h1>
      <h1>{usernamedisplay}</h1>
        <h2>Features available:</h2>
        <h2>Publish Games</h2>
        <h2>Add/Modify/Remove games from your list</h2>
        <h2>Search and Filter Database for choices</h2>
      <h1>Enter Game Input Details:</h1>
      
      <TextField id="outlined-basic" label="GAME" variant="outlined" type="text" onChange={(event) => setGame(event.target.value)}/>
      <TextField id="outlined-basic" label="SIZE(MB)" variant="outlined" type="number" onChange={(event) => setSize(event.target.value)}/>
      <TextField id="outlined-basic" label="PUBLISHER" variant="outlined" type="text" onChange={(event) => setPublisher(event.target.value)}/>
      <TextField id="outlined-basic" label="REGION" variant="outlined" type="text" onChange={(event) => setRegion(event.target.value)}/>
      <TextField id="outlined-basic" label="YEAR RELEASED" variant="outlined" type="number" onChange={(event) => setYear(event.target.value)}/>
      <Button variant="contained" onClick={addGame}>ADD GAME</Button>
      </div>
      <div className="games">
        <Button variant="contained" onClick={getGames}>SHOW GAMES</Button>
        {gameList.map((val,key) => {
      return <div className="showgames">
      <div>
      <h3> Game: {val.game}</h3>
      <h3> Size: {val.size}</h3>
      <h3> Publisher: {val.publisher}</h3>
      <h3> Region: {val.region}</h3>
      <h3> Year: {val.year}</h3>
      </div>
      <div><TextField id="outlined-basic" label="EDITED GAME" variant="outlined" type="text" onChange ={(event) => {setNewGame(event.target.value);}} />
      <div>
      <Button variant="contained" onClick={() => {updateGame(val.id)}}>UPDATE</Button>
      <Button variant="contained" onClick={() => {deleteGame(val.id)}}>Delete</Button>
      </div>
      
      </div>
      </div>
         })}      


      </div>
      

    </div>
  );
}



export default App;
