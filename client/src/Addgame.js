import "./App.css";
import React, {useState} from "react";
import Axios from 'axios';

function Addgame({ usernamedisplay }) {
    
    const [userGame,setUserGame] = useState([]);
    
    
        const getUserGame = () => {
          Axios.get('http://localhost:3001/user/getgames').then((response) => {
              setUserGame(response.data);
              console.log(userGame)
            });
        }
        
        const deleteUserGame = (usergid) => {
            Axios.delete(`http://localhost:3001/user/delete/${usergid}`).then((response) => {
              setUserGame(userGame.filter((val) => {
                return val.usergid !== usergid;
              })
              );
            });
          };

          return (
            <div className="App">
            <div className="gameInfo">  
              <h1>Welcome, {usernamedisplay}</h1>
            
            <h2>Get your list of games owned:</h2>
            
            </div>
            <div className="gameInfo">
            <button onClick={getUserGame}>Display Your Games</button>

            {userGame.map((val,key) => {
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
              <button onClick={() => {deleteUserGame(val.usergid)}}>Delete</button>
              </div>
              </div>
            })}
        
        
            </div>
            </div>
          
            
          );
}

export default Addgame;