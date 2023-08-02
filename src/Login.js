import React, { useState } from "react";
import { useContext } from "react";
import { Logincontext } from "./LoginContext";



export default function Login(){
    const {setUsername,setShowProfile}=useContext(Logincontext);

    return(
        <div className="App">
        <input type="text" placeholder ="enter name" onChange={(event)=>{
          setUsername(event.target.value)
        }}/>
        <input type="text" placeholder="password" />
        <button onClick={()=>{
            setShowProfile(true)
        }}>Login</button>
      </div>
    )
}