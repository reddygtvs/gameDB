import "./App.css";
import React, {useState} from "react";
import Axios from 'axios';

function Addgame() {
    const [username,setUserName] = useState(""); 
    const [gid,setGameId] = useState(0);
    const [userGame,setUserGame] = useState([]);
    const [gName, setGname] = useState("");
    const createUsert = () => {
        console.log("\n",username,"\n",gid)
        Axios.post('http://localhost:3001/user/create',{
          username: username,
          gid: gid,

          }).then(() => {
            setUserGame([...userGame,{
              username: username,
              gid: gid,

            }])
          }).catch(err => console.log(err))
        };
    
        const getUserGame = () => {
          Axios.get('http://localhost:3001/user/usertables').then((response) => {
              setUserGame(response.data);
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
              <h1>User Games page </h1>
            <label><h2>Username : </h2></label><input type ="text" onChange ={(event) => {setUserName(event.target.value);}}/>
            <label><h2>gid:  </h2></label>
            <input type = "number" onChange ={(event) => {setGameId(event.target.value);}}/>
            <button onClick={createUsert}> Create Usergame List </button>
            <br></br>
            ----------------------------------------------------------------------------------------------------------------------------------
            </div>
            <div className="gameInfo">
            <button onClick={getUserGame}>ShowUsers</button>
            {userGame.map((val,key) => {
              return <div key={key} className="showusergames">
              <div>
              <h3> User Name : {val.username}</h3>
              <h3> gid : {val.gid}</h3>
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