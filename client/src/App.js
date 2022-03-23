
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

  // const [game, setGame] = useState("")
  // const [size, setSize] = useState(0)
  // const [publisher, setPublisher] = useState("")
  // const [region, setRegion] = useState("")
  // const [year, setYear] = useState(0)
  
  // const[newgame,setNewGame] = useState(0);
  // const [gameList, setGameList] = useState([])

  // const addGame = () => {
  //   console.log(game,"\n",size,"\n",publisher,"\n",region,"\n",year,"\n")
  //   Axios.post("http://localhost:3001/create", {
  //     game: game,
  //     size: size,
  //     publisher: publisher,
  //     region: region,
  //     year: year,

  //   }).then(() => {
  //     console.log("Success!!")
      
  //   }).catch(err => console.log(err))
  // }

  // const getGames = () => {
  //   Axios.get("http://localhost:3001/games").then((response) => {
  //     setGameList(response.data); 
  //   })
  // }

  // const updateGame = (id) => {
  //   Axios.put('http://localhost:3001/update',{game: newgame,id: id}).then((response) => {
  //     alert("update");
  //     setGameList(gameList.map((val) => {
  //       return val.id === id ? {
  //         game: newgame,
  //         size: val.size,
  //         publisher: val.publisher,
  //         region: val.region,
  //         year: val.year,
  //       } : val;
  //     }
      
  //     ));
  //   });
  // };
  // const deleteGame = (gid) => {
  //   Axios.delete(`http://localhost:3001/delete/${gid}`).then((response) => {
  //     setGameList(gameList.filter((val) => {
  //       return val.gid != gid;
  //     })
  //     );
  //   });
  // };





  // const displayInfo = () => 
  //   console.log(game,"\n",size,"\n",publisher,"\n",region,"\n",year,"\n")
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
