import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function Login() {
  const [pubname,setPubName] = useState("");
  const [username,setUserName] = useState("");
  const [pubnamecheck, setPubNameCheck] = useState("")
    const [email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[password,setPassword] = useState("");
    const[newemail,setNewEmail] = useState("");
    const [pubList,setPubList] = useState([]);
    const [userList,setUserList] = useState([]);

    const register = () => {
      Axios.post('http://localhost:3001/login/register', {
        pubname: pubname,
        email: email,
        pass: pass
      }).then((response) => {
        console.log(response)
      })
    }

    const login = () => {
      Axios.post('http://localhost:3001/login/login', {
        pubname: pubnamecheck,
        // email:email,
        pass: password
      }).then((response) => {
        console.log(response)
      })
    }

  return (
    <div className="App">
      <div className="gameInfo">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text"
        onChange={(e) => {
          setPubName(e.target.value)
        }}/>
        <label>Email</label>
        <input type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <label>Password</label>
        <input type="text"
        onChange={(e) => {
          setPass(e.target.value)
        }} />
        <button onClick={register}> Register </button>

      </div>
      <div className="gameInfo">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."
        onChange={(e) => {
          setPubNameCheck(e.target.value)
        }}/>
        <input type="password" placeholder="Password..."
        onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <button onClick={login}> Login </button>

      </div>
    </div>

  )
}

export default Login;

