import React, {  useState } from "react";
import Axios from 'axios';
import NavBar from "../layouts/NavbarU"
import {useNavigate } from 'react-router-dom';
import { MdCardMembership } from "react-icons/md";
// import isEmpty from "is-empty";

const LoginU = () => {
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
    Axios.post("http://localhost:3001/loginu", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        alert("you have not registered!");
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
  <div className="login">
        <h1>Login</h1>
        <input 
          type="text" required
          placeholder="Username..." 
          onChange = { (e) => {
            setUsername (e.target.value);
          }}
          
        /> <br/>
        <input 
          type="password" 
          placeholder="Password..." required
          onChange = { (e) => {
            setPassword (e.target.value);
          }}
        /><br/>
        <button onClick={login}>Login</button>
      </div>

      {loginStatus && navigate(`/user/${username}`)  }
</>
);

}

export default LoginU;