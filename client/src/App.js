
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [game, setGame] = useState("")
  const [size, setSize] = useState(0)
  const [publisher, setPublisher] = useState("")
  const [region, setRegion] = useState("")
  const [year, setYear] = useState(0)

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

  const displayInfo = () => 
    console.log(game,"\n",size,"\n",publisher,"\n",region,"\n",year,"\n")
  return (
    
    <div className="App">
      <div className="gameInfo">
      <label>Game:</label>
      <input type="text" onChange={(event) => setGame(event.target.value)}/>
      <label>Size(MB):</label>
      <input type="number" onChange={(event) => setSize(event.target.value)}/>
      <label>Publisher:</label>
      <input type="text" onChange={(event) => setPublisher(event.target.value)}/>
      <label>Region:</label>
      <input type="text" onChange={(event) => setRegion(event.target.value)}/>
      <label>Year Released:</label>
      <input type="number" onChange={(event) => setYear(event.target.value)}/>
      <button onClick={addGame}>Add Game</button>
      </div>

    </div>
  );
}

export default App;
