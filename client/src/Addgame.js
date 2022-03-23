import "./App.css";
import React, {useState} from "react";
import Axios from 'axios';

function Addgame({ usernamedisplay }) {
    const [username,setUserName] = useState(""); 
    const [gid,setGameId] = useState(0);
    const [userGame,setUserGame] = useState([]);
    const [gName, setGname] = useState("");
    const [publisher, setPublisher] = useState("")
    // const createUsert = () => {
    //     console.log("\n",username,"\n",gid)
    //     Axios.post('http://localhost:3001/user/create',{
    //       username: username,
    //       gid: gid,

    //       }).then(() => {
    //         setUserGame([...userGame,{
    //           username: username,
    //           gid: gid,

    //         }])
    //       }).catch(err => console.log(err))
    //     };
       
    
        const getUserGame = () => {
          Axios.get('http://localhost:3001/user/getgames').then((response) => {
              setUserGame(response.data);
              console.log(userGame)
            });
        }
        const getGameName = () => {
          Axios.get('http://localhost:3001/user/idfetch').then((response) => {
            setGname(response.data);
          })
        }
        const deleteUserGame = (gid) => {
            Axios.delete(`http://localhost:3001/user/delete/${gid}`).then((response) => {
              setUserGame(userGame.filter((val) => {
                return val.gid !== gid;
              })
              );
            });
          };

          return (
            <div className="App">
            <div className="gameInfo">  
              <h1>Welcome, {usernamedisplay}</h1>
            {/* <label><h2>Username : </h2></label><input type ="text" onChange ={(event) => {setUserName(event.target.value);}}/>
            <label><h2>gid:  </h2></label>
            <input type = "number" onChange ={(event) => {setGameId(event.target.value);}}/> */}
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
              <button onClick={() => {deleteUserGame(val.gid)}}>Delete</button>
              </div>
              </div>
            })}
        
        
            </div>
            </div>
          
            
          );
}

export default Addgame;