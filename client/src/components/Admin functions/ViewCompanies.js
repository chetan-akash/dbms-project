import React , {useState, useEffect } from 'react'
import {Modal, Button} from 'bootstrap'
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
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
    width:150px;
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
const ViewCompanies = () => {
    const [companiesList, setCompaniesList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewcompanies').then((response) =>
        {
            setCompaniesList(response.data);
        });
    }, []);

    const deleteCompany = (id) =>{
      alert(`do you want to delete the company with id ${id}`);
      Axios.delete(`http://localhost:3001/admin/deletecompany/${id}` ).then(() => {alert(" The company is deleted")}).then(window.location.reload(true))
    };

    return(
      <>
        <div className="Users container">
          <SideBar/>
          <Edit>
        <h1>Companies</h1>
        <table className="table" >
        
        <thead>
          <tr>
            <th><p className='1'> Company id </p></th>
            <th><p className='2'> Company name </p></th>
            <th><p className='3'> Company email </p></th>
            <th><p className='4'> Company address </p></th>
            <th><p className='5'> Action </p></th>
            
          </tr>
        </thead>
        <tbody>
            {companiesList.map(member =>
              <tr key={member.id}>
                <td><p>{member.comp_id}</p> </td> 
                <td><p>{member.name} </p></td> 
                <td><p>{member.email} </p></td>
                <td><p>{member.address} </p> </td>
                <td><Edited><button onClick = {() => {deleteCompany(member.comp_id)}} className="btn btn-danger" > <MdIcons.MdDelete/></button> <Link to = {`/admin/editcompany/${member.comp_id}`} ><button> <HiIcons.HiPencil/></button></Link> </Edited></td>
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

export default ViewCompanies;
// onClick = {() => {deleteCustomer(member.cust_id)}}