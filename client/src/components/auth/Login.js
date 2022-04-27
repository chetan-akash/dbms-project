import React, {  useState } from "react";
import Axios from 'axios';
import NavBar from "../layouts/Navbar"
import {useNavigate } from 'react-router-dom';
// import isEmpty from "is-empty";
import './Login.css'

const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState ("");
const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  // const userAuthenticeted = () => {
  //   alert("You are logged in");
  //   Axios.get("http://localhost:3001/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };
    
  const login = () => {
    // if(isEmpty(password) || isEmpty(username)){alert("invalid credentials");}
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        alert("Invalid credentials");
        setLoginStatus( false);
      } else {
        console.log(response.data);
        localStorage.setItem("token", response.data.token)
        setLoginStatus (true);
      }
    });
}

return(
  <>
  <NavBar/>
  <div className="login-form">
        <h1>Login</h1>
        <div class="content">
        <div className="input-field">
        <input 
          type="text" required
          placeholder="Username..." 
          onChange = { (e) => {
            setUsername (e.target.value);
          }}
          
        /></div> <br/>
        <div className="input-field">
        <input 
          type="password" 
          placeholder="Password..." required
          onChange = { (e) => {
            setPassword (e.target.value);
          }}
        /></div><br/> 
         <div class="action">
        <button onClick={login}>Login</button>
        </div>
        </div>
      </div>
  

      {loginStatus && navigate(`/admin/${username}`)}
</>
);

}

export default Login;