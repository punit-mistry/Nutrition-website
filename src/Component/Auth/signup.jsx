import React, { useState } from 'react'
import {app} from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {

  const auth = getAuth(app)
  const [userdata ,setUsetData] = useState({
    username:"",
    password:"",
  })
  
  const handlechange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUsetData({...userdata,[name]:value})
  }

  const signup=(e)=>{
    e.preventDefault()
    console.log(userdata)
    createUserWithEmailAndPassword(auth,userdata.username,userdata.password)
    .then((res)=>alert("hogaya saved"))
    .catch((err)=>console.log(err))
  }

  return (
    <div><form onSubmit={signup}>
        <h2>Sign Up</h2>
        <input type="text" name='username' placeholder='Username' value={userdata.username} onChange={handlechange}/>
        <input type="password" name='password' placeholder='Password'value={userdata.password} onChange={handlechange}/>
        <button type='submit' >SIgn Up </button>
      </form></div>
  )
}

export default Signup