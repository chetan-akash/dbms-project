import React, {  useState } from "react";
import Axios from 'axios';
import NavBar from "../layouts/NavbarU"


const RegisterU = () =>{


    const [nameReg, setNameReg] = useState ("");
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const [addressReg, setAddressReg] = useState ("");
    const [phoneReg, setPhoneReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");
  

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/registeru", {
          name: nameReg,
          username: usernameReg,
          email: emailReg,
          phone: phoneReg,
          address: addressReg,
          password: passwordReg,
        }).then((err,res) => {
          if(err){alert("the user is already registered"); }
        });
      };
     
       return (
        <div class="container">
          <NavBar/>
       <div className="registration">
        <div class="header">
	     	<h2>Create Account</h2>
	      </div>
        <form id="form" class="form">
        <div class="form-control">
        <label>Name</label>
        <input 
          type="text" required
          onChange={(e) => {
            setNameReg(e.target.value);
          }}  
        /><br/>
        </div>
        <div class="form-control">
        <label>Username</label>
        <input 
          type="text"  required
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          /><br/>
          </div>
        <div class="form-control">
        <label>Email</label>
        <input 
          type="email" required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          /><br/>
          </div>
          <div class="form-control">
        <label>Phone</label>
        <input 
          type="text"  required
          onChange={(e) => {
            setPhoneReg(e.target.value);
          }}
          /><br/>
          </div>
          <div class="form-control">
        <label>Address</label>
        <input 
          type="text"  required
          onChange={(e) => {
            setAddressReg(e.target.value);
          }}
          /><br/>
          </div>
        <div class="form-control">
        <label>password</label>
        <input 
          type="password" required
          onChange={(e) =>{
            setPasswordReg(e.target.value);
          }} 
          /> <br />
          </div>
        <button className = "btn" onClick={register}> Register</button>
        </form>
      </div>
      </div>
      );
}

export default RegisterU;