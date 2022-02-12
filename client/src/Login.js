import React, { useState, props, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const Login = ( {logstate, setLogstate, setUsernameDisplay, setPasswordDisplay} ) => {
  const [pubname,setPubName] = useState("");
  const [username,setUserName] = useState("");
  const [pubnamecheck, setPubNameCheck] = useState("")
  const [usernamecheck, setUsernameCheck] = useState("")
    const [email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[password,setPassword] = useState("");
    const[newemail,setNewEmail] = useState("");
    // const [pubList,setPubList] = useState([]);
    // const [userList,setUserList] = useState([]);
    const [loginstatus, setLoginStatus] = useState([])
    const navigate = useNavigate();
    const [togglereg, setToggleReg] = useState("user")

    const [togglelog, setToggleLog] = useState("publisher")

    const setlogu = () => {
      setUsernameDisplay(pubnamecheck)
      setLogstate(1)
    }
    const setlogp = () => {
      setUsernameDisplay(pubnamecheck)
      setLogstate(2)
    }


    const registerpub = () => {
      Axios.post('http://localhost:3001/login/registerpub', {
        pubname: pubname,
        email: email,
        pass: pass
      }).then((response) => {
        console.log(response)
      })
    }

    const registeruser = () => {
      Axios.post('http://localhost:3001/login/registeruser', {
        pubname: pubname,
        email: email,
        pass: pass
      }).then((response) => {
        console.log(response)
      })
    }

    const loginpub = () => {
      Axios.post('http://localhost:3001/login/loginpub', {
        pubname: pubnamecheck,
        // email:email,
        pass: password
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message) 
        } else {
          setLoginStatus("Welcome, Publisher " + response.data[0].pubname)
          setlogp()
          navigate("/")
        }
      })
    }

    const loginuser = () => {
      Axios.post('http://localhost:3001/login/loginuser', {
        pubname: pubnamecheck,
        // email:email,
        pass: password
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message) 
        } else {
          setLoginStatus("Welcome, User " + response.data[0].username)
          setlogu()
          navigate("/")
        }
      })
    }

    if (togglereg == "publisher") {
      return (
        <div className="App">
          <div className="gameInfo">
            
            <h1>Registration</h1>
            <h2>Select User Type for Login AND Signup</h2>
            <select onChange={(e) => {
              setToggleReg(e.target.value)
            }}>
              
              <option value="user">user</option>
              <option value="publisher">publisher</option>
            </select>
            {/* <h1>{togglereg}</h1> */}
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
            <input type="password"
            onChange={(e) => {
              setPass(e.target.value)
            }} />
            <button onClick={registerpub}> Register </button>
            
    
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
            <button onClick={loginpub}> Login </button>
            <h1>{loginstatus}</h1>
          </div>
          
        </div>
    
      ) 
    } else {
      return (
        <div className="App">
          <div className="gameInfo">
            
            <h1>Registration</h1>
            <h2>Select User Type for Login AND Signup</h2>
            <select onChange={(e) => {
              setToggleReg(e.target.value)
            }}>
              
              <option value="user">user</option>
              <option value="publisher">publisher</option>
            </select>
            {/* <h1>{togglereg}</h1> */}
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
            <input type="password"
            onChange={(e) => {
              setPass(e.target.value)
            }} />
            <button onClick={registeruser}> Register </button>
            
    
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
            <button onClick={loginuser}> Login </button>
            <h1>{loginstatus}</h1>
          </div>
          
        </div>
    
      )
    }
}

export default Login;

