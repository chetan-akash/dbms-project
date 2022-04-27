import React , {useState, useEffect } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Edit = styled.div`
h1{
  display: block;
    white-space:nowrap;
    font-size:20px; 
    margin-right: 20rem;
    text-align: center;
    right:0%;
    position:relative;
}
    display: block;
    white-space:nowrap;
    font-size:20px;
    margin-right: 20rem;
    text-align: center;
    right:-20%;
    position:relative;
  p{
    width:200px;
  }
  p 1{
    width:130px;
  }
  p 2{
    width:130px;
  }
`
const Edited = styled.div`
.btn-danger{
  color:red;
}
.btn-primary{
  color:black; 
}
`
const ViewStock = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewstock').then((response) =>
        {
            setOrdersList(response.data);
        });
    }, []);

    const deleteStock = (id) =>{
        Axios.delete(`http://localhost:3001/admin/deletestock/${id}` ).then(window.location.reload(true))
      };

    const updateStock = (id) =>{
        Axios.post('http://localhost:3001/admin/updatestock' ).then(window.location.reload(true))
      };

    return(
      <>
        <div className="Users container">
          <SideBar/>
          <Edit>
            <button onClick={updateStock}>Update</button>
        <h1>Stocks</h1>
        <table className="table" >
        
        <thead>
          <tr>
            <th><p className='1'> Order id </p></th>
            <th><p className='2'> Name  </p></th>
            <th><p className='3'> Expiry Date </p></th>   
            <th>  <p> Action </p> </th>
          </tr>
        </thead>
        <tbody>
            {ordersList.map(member =>
              <tr key={member.id}>
                <td><p>{member.stock_id}</p> </td> 
                <td><p>{member.name} </p></td> 
                <td><p>{member.quantity} </p></td>
                <td><p>{member.expiry} </p> </td>
                <td><Edited>
                    <button onClick = {() => {deleteStock(member.stock_id)}} className="btn btn-danger" > <MdIcons.MdDelete/></button> 
                    <Link to = {`/admin/editstock/${member.stock_id}`} ><button> <HiIcons.HiPencil/></button></Link> </Edited></td>
                <td>
                </td>
                
              </tr>
            )}
        </tbody>
        </table>

        </Edit>
      </div>

      </>
    );
}

export default ViewStock;
// onClick = {() => {deleteCustomer(member.cust_id)}}