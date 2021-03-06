import React, {  useState } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';

 

const Company = () => {
  Axios.defaults.withCredentials = true;

    
    const [nameReg, setNameReg] = useState ("");
    const [addressReg, setAddressReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");

    const register = () => {
        Axios.post("http://localhost:3001/admin/addcompany", {
          name: nameReg,
          address: addressReg,
          email: emailReg,
        }).then((response) => {
          console.log(response);
        }).then(window.location.reload(false));
      };
  

      return (
        <div class="container">
          <SideBar/>
       <div className="company registration">
        <div class="header">
	     	<h2>Add a company</h2>
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
        <label>Address</label>
        <input 
          type="text"  required
          onChange={(e) => {
            setAddressReg(e.target.value);
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
        <button onClick={register}> Add company </button>
        </form>
      </div>
      </div>
      );
}

export default Company;