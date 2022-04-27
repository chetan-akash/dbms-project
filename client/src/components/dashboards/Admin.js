import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Customer from '../Admin functions/AddCustomer'
// import Dashboard from './Dashboard'
import { useParams } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components';

const Heading = styled.div`
background:black;
    display: block;
    white-space:nowrap;
    font-size:30px;
    margin-right: 20rem;
    text-align: center;
    right:-5%;
    position:relative;
`

const Everything = styled.div`
    
`

const Admin = () => {
    const {username} = useParams();
    return (
        <div className='everything'>
        <Everything>
       <SideBar/>
       <div className='title'>
       <Heading>
       <h1>Welcome {username}</h1>
       </Heading>
       </div>
       </Everything>
       </div>
    )
}

export default Admin;