import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = ({logstate, setLogstate, setUsernameDisplay}) => {
    const navigate = useNavigate();


    const setLogo = () => {
        setUsernameDisplay("Guest")
        setLogstate(0)
        navigate("/")

    }
  return (
    <div className="App">
        <h1>Do you want to Logout?</h1>
        <div>
        <button onClick={setLogo}>Logout</button>
        </div>
        
        </div>
  )
}

export default Logout