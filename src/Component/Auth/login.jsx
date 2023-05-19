import React, { useState } from 'react'
import {app} from '../../firebase'
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const Navigate = useNavigate()
  const auth = getAuth(app)
  const google =new GoogleAuthProvider()
  const [userdata ,setUsetData] = useState({
    username:"",
    password:"",
  })  

  const [login,setLogin] = useState(null)
  
  const handlechange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUsetData({...userdata,[name]:value})
  }

  const signup=(e)=>{
    e.preventDefault()
  
    signInWithEmailAndPassword(auth,userdata.username,userdata.password)
    .then((res)=>alert("Successfully logged in"))
    .catch((err)=>console.log(err))
  }
  const googlelogin=()=>{
    signInWithPopup(auth, google)
      .then((res)=>{const user = res.user;
        setLogin(user)
        Navigate('/home')
      })
    .catch((err)=>console.log(err))
  }
  return (
    <div><form onSubmit={signup}>
        <h2>Login Page</h2>
        <input type="text" name='username' placeholder='Username' value={userdata.username} onChange={handlechange}/>
        <input type="password" name='password' placeholder='Password'value={userdata.password} onChange={handlechange}/>

        <button type='submit' >SIgn Up </button>
        <button onClick={googlelogin}>Google Log In</button>
      </form>

        {
          login&& 
           <>
           
           <h1>{login.displayName}</h1>
           <h1>{login.email}</h1>
             <img src={login.photoURL} />
         
           
           
           </>
            
        }
      
      
      </div>
  )
}

export default Login