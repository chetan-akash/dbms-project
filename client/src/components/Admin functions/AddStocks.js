import React, {  useState } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';

 

const AddStock = () => {
  Axios.defaults.withCredentials = true;

    
    const [nameReg, setNameReg] = useState ("");
    const [quantityReg, setQuantityReg] = useState("");
    const [expiryReg, setExpiryReg] = useState (new Date());

    const addstock = () => {
        Axios.post("http://localhost:3001/admin/addstock", {
         name:nameReg,
         quantity:quantityReg,
         expiry:expiryReg
        }).then((response) => {
          console.log(response);
        });
      };
  

      return (
        <div class="container">
          <SideBar/>
       <div className="customer registration">
        <div class="header">
	     	<h2>Add a Stock</h2>
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
        <label>quantityReg</label>
        <input 
          type="number"  required
          onChange={(e) => {
            setQuantityReg(e.target.value);
          }}
          /><br/>
          </div>
        <div class="form-control">
        <label>expiryReg</label>
        <input 
          type="date" required
          onChange={(e) => {
            setExpiryReg(e.target.value);
          }}
          /><br/>
          </div>
        <button onClick={addstock}> Add Stock </button>
        </form>
      </div>
      </div>
      );
}

export default AddStock;