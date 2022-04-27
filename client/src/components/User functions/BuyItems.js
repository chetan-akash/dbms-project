import React,{useState} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';

const BuyItems = () => {
  const  {username} = useParams();
  const [no1, setno1] = useState(0);
  const [no2, setno2] = useState(0);
  const [no3, setno3] = useState(0);
  const [no4, setno4] = useState(0);
  const [no5, setno5] = useState(0);
  const [no6, setno6] = useState(0);
  const [no7, setno7] = useState(0);

 const buyitems = () => {

   Axios.post("http://localhost:3001/user/buy", {
     username,
     no_paracetmol:no1,
     no_ibu:no2,
     no_dolo:no3,
     no_pan:no4,
     no_arip:no5,
     no_beds:no6,
     no_oxime:no7,
   }).then((response) => {
    console.log(response);
  });
 };

  return(
    <div>
       <div className="buy items">
        <div class="header">
	     	<h2>Buy Items</h2>
	      </div>
        <form id="form" class="form">
        <div class="form-control">
        <label> No of paracetmol</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno1(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>No of ibuprofen</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno2(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>No of dolo</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno3(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>No of panadol</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno4(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>NO of ariprazole</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno5(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>No of beds</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno6(e.target.value);
          }}  
          /><br/>
          </div>
        <div class="form-control">
        <label>No of oximeters</label>
        <input 
          type="number"  
          onChange={(e) => {
            setno7(e.target.value);
          }}  
          /><br/>
          </div>
         <button onClick={buyitems}> Buy THese</button>
        </form>
        </div>
        </div>
  )
  
}

export default BuyItems;