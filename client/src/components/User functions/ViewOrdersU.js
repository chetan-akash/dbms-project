import React , {useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarA';
import * as ImIcons from 'react-icons/im';
import * as TiIcons from 'react-icons/ti';
import * as IoIcons from 'react-icons/io5';
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
    width:100px;
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
const ViewOrdersU = () => {
    const [ordersList, setOrdersList] = useState([]);
    const {username} = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:3001/user/vieworders/${username}`).then((response) =>
        {
            setOrdersList(response.data);
        });
    }, []);

    

    return(
      <>
        <div className="Users container">
          <SideBar/>
          <Edit>
        <h1>Orders</h1>
        <table className="table" >
        
        <thead>
          <tr>
            <th><p className='1'> Order id </p></th>
            <th><p className='2'> cust_name </p></th>
            <th><p className='3'> paracemol </p></th>
            <th><p className='4'> ibuprofen </p></th>
            <th><p className='5'> dolo</p></th>
            <th><p className='5'> pandol</p></th>
            <th><p className='5'> ariprazole</p></th>
            <th><p className='5'> beds</p></th>
            <th><p className='5'> oximes</p></th>        
            
          </tr>
        </thead>
        <tbody>
            {ordersList.map(member =>
              <tr key={member.id}>
                <td><p>{member.orderid}</p> </td> 
                <td><p>{member.cus_name}</p> </td> 
                <td><p>{member.no_paracetmol}</p> </td> 
                <td><p>{member.no_ibu}</p> </td> 
                <td><p>{member.no_dolo}</p> </td> 
                <td><p>{member.no_pan}</p> </td> 
                <td><p>{member.no_arip}</p> </td> 
                <td><p>{member.no_beds}</p> </td> 
                <td><p>{member.no_oxime}</p> </td> 
               
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

export default ViewOrdersU;
// onClick = {() => {deleteCustomer(member.cust_id)}}