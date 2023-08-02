import React from 'react';
import Login from './Login';
import './App.css';
import { useState } from 'react';
import Profile from './Profile';
import { Logincontext } from './LoginContext';

function App() {
  const [showProfile, setShowProfile]=useState(false);
  const [username,setUsername]=useState("");

  return (
    <>
    <Logincontext.Provider value={{showProfile,username,setShowProfile,setUsername}}>
    {showProfile? <Profile/>:<Login/>}
    </Logincontext.Provider>
      
    </>
   
  );
}

export default App;
