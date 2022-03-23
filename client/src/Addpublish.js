import React from 'react'
import './App.css'
import { useNavigate } from "react-router-dom"

const Addpublish = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login")
  }
  return (
    <div className="App">
      <div className="gameInfo">
      <h1>Login for more Functionality!</h1>
      <button onClick={login}>Login</button>
      </div>
      </div>
  )
}

export default Addpublish