import React from "react";
import { useContext } from "react";
import { Logincontext } from "./LoginContext";
import Login from "./Login";



export default function Profile(){
    const {username, setShowProfile}=useContext(Logincontext);
    return(
        <div className="App">
            <h1>Profile</h1>
            <h2>Username: {username}</h2>
            <button onClick={()=>{
                {<Login/>&& setShowProfile(false)}
            }}>Reset</button>
        </div>
    )
}