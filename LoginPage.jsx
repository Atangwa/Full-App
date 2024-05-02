import React, { useState, useEffect  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './LoginPage.css'
import User_icon from '../assets/user.jpg'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


 const LoginPage = () => {
const navigate = useNavigate()
// eslint-disable-next-line react-hooks/rules-of-hooks
const api_url = "http://localhost:5001/user/auth/"
const [action,setAction]= useState("Login");
const [user, setUser] = useState({email:"", password:"",})
const [signup, setsignup] = useState("false")

const login = () =>{
  const email= document.getElementsByClassName("email")[0].value 
  const password= document.getElementsByClassName("password")[0].value 


  //.then(data=> setUser({...data}))
 
  axios.post(api_url+'login',{email, password}).then((response)=>{
    if(response.data[0]){
      console.log(response.data[0].email)
      console.log(response.data[0].password)
     if(response.data[0].email!=="")
     {
     
       navigate("/WeatherApp")
     }
     
    }

  }) //.then(response=>console.log(response.data[0].email))
  .catch((err)=>console.log(err))
}


const register = () =>{
  let email =""
  let password =""
  let name =""
  let userID=""
 
   name= document.getElementsByClassName("name")[0].value 
   userID= document.getElementsByClassName("userid")[0].value 
   email= document.getElementsByClassName("email")[0].value 
   password= document.getElementsByClassName("password")[0].value 
  console.log({name,email, password, userID})

  //.then(data=> setUser({...data}))
 
  axios.post(api_url+'register',{name,email, password, userID}).then((response)=>{
    if(response.data[0]){
      // console.log(response.data[0].email)
      // console.log(response.data[0].password)
     if(response.data[0].email!=="")
     {
 
      console.log("Successfully registered")
       navigate("/WeatherApp")
     }
     
    }

  }) //.then(response=>console.log(response.data[0].email))
  .catch((err)=>console.log(err))
}

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div input className="inputs">
          {action==="Login"?<div></div>:<div className="input">
            <img src={User_icon} alt=" "/>
            <input placeholder="name" type="text" className='name'/>
            </div>}
        <div className="input"> 
        
            <img src={email_icon} alt=" "/>
            <input placeholder="Email Id" type="email"
            className='email' 
            />
            </div>
         <div className="input"> 
           <img src={password_icon} alt=" "/>
             <input placeholder="Password" type="password"
             className='password'
             />
            </div>

            {action==="Login"?<div></div>:<div className="input">
            <img src={User_icon} alt=" "/>
            <input placeholder="Matricule" type="text" className='userid'/>
            </div>}
            </div>
            <div className="forgot-password">Don't have an account?<span><button onClick={()=>{
              setAction("Sign uP")
         
          }}  >click here</button></span></div>
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
              // setAction("Sign uP")
              // setsignup("true");
              register()
          }}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
              setAction("Login")
              login()
              }}>Login</div>
          </div>
            
    </div>
  );
};
export default LoginPage
