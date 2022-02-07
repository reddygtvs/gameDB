
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

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
      <div className="games">
        <button onClick={getGames}>Show Games</button>
        {gameList.map((val,key) => {
      return <div className="showgames">
      <div>
      <h3> Game: {val.game}</h3>
      <h3> Size: {val.size}</h3>
      <h3> Publisher: {val.publisher}</h3>
      <h3> Region: {val.region}</h3>
      <h3> Year: {val.year}</h3>
      </div>
      <div><input type="text" placeholder="<2000"  onChange ={(event) => {setNewGame(event.target.value);}} />
      <button onClick={() => {updateGame(val.id)}}>Update</button>
      <button onClick={() => {deleteGame(val.id)}}>Delete</button>
      </div>
      </div>
         })}      


      </div>
      

    </div>
  );
}

export default App;
