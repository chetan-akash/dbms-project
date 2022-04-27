import React , {useState, useEffect } from 'react'
import Axios from 'axios' 
import './ViewCustomers.css'
import * as MdIcons from 'react-icons/md';
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components';

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
`

const Edited = styled.div`
.btn-danger{
  color:red;
}

`

const ViewCustomers = () => {
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewcustomers').then((response) =>
        {
            setCustomerList(response.data);
        });
    }, []);

    const deleteCustomer = (id) =>{
      alert(`do you want to delete the customer with id ${id}`);
        Axios.delete(`http://localhost:3001/admin/deletecustomer/${id}` ).then(() => {alert("The customer is deleted")}).then(window.location.reload(false))
    };

    return(
        <div className="Users container">
          <SideBar/>
        <Edit>
        <h1>Customers</h1>
        <table className="table" >
        <thead>
          <tr>
            <th>Member id</th>
            <th>Member name</th>
            <th>Member email </th>
            <th>Member address</th>
            <th>Member phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {customerList.map(member =>
              <tr key={member.id}>
                <td>{member.cid} </td> 
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.address}</td>
                <td>{member.phone}</td>
                <td> <Edited><button  className="btn btn-danger" onClick = { () => {deleteCustomer(member.cid)}}> <MdIcons.MdDelete/></button></Edited></td>
              </tr>
            )}
        </tbody>
        
        </table>
        </Edit>
      </div>
    );
}

export default ViewCustomers;