import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = ({logstate, setLogstate}) => {
    const navigate = useNavigate();


    const setLogo = () => {
        setLogstate(0)
        navigate("/")

    }
  return (
    <div>
        <h1>Do you want to Logout?/</h1>
        <button onClick={setLogo}>Logout</button>
        </div>
  )
}

export default Logout